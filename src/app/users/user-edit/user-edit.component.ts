import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {UserControllerComponent} from "../user-controller/user-controller.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../services/user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  static componentPath = 'user-edit';

  private editForm: FormGroup;
  private user: User;
  private roles: Array<string> = ['ROLE_ADMIN', 'ROLE_USER'];
  private selectedRoles: Array<string> = [];
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  get f() { return this.editForm.controls; }

  ngOnInit() {
    let email = localStorage.getItem('userEditEmail');
    if (!email) {
      alert("Invalid action.");
      this.router.navigate([UserControllerComponent.componentPath]);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required]],
      enabled: ['', [Validators.required]],
    });

    this.userService.loadByEmail(email).subscribe(user => {
      console.log('### Loaded user ' + JSON.stringify(user));
      this.user = user;
      this.selectedRoles = user.roles;
      this.f.id.setValue(user.id);
      this.f.name.setValue(user.name);
      this.f.email.setValue(user.email);
      this.f.enabled.setValue(user.enabled);
    });
  }

  onSubmit() {
    this.submitted = true;
    let user: User = this.editForm.value;
    user.roles = this.selectedRoles;
    this.userService.adminUpdate(user).subscribe(updated =>
    {
      console.log('### Updated user: ' + JSON.stringify(updated));
      this.router.navigate(['/user-list'])
    })
  }

  roleChanged(role: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedRoles.push(role);
      this.logRoles()
    } else {
      this.selectedRoles = this.arrayRemove(this.selectedRoles, role);
      this.logRoles()
    }
  }

  arrayRemove(arr, value) {
    return arr.filter(function(element){
      return element != value;
    });
  }

  logRoles() {
    let log = '### Selected roles: ';
    for (let str of this.selectedRoles) {
      log = log + str + ' ';
    }
    console.log(log);
  }

  hasRole(role: string) {
    if (this.user) {
      return this.user.roles.includes(role);
    }
    return false;
  }

  // getters for template:
  get registered() : string {
    if (this.user) {
      return this.user.registered.slice(0, 16).replace('T', ' ');
    }
    return null;
  }

}
