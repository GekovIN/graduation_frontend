import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../services/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-edit-modal-form',
  templateUrl: './user-edit-modal-form.component.html',
  styleUrls: ['./user-edit-modal-form.component.css']
})
export class UserEditModalFormComponent implements OnInit {

  @Input() email: string;

  private editForm: FormGroup;
  private user: User;
  private roles: Array<string> = ['ROLE_ADMIN', 'ROLE_USER'];
  private selectedRoles: Array<string> = [];
  submitted = false;


  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: UserService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required]],
      enabled: ['', [Validators.required]],
    });

    this.service.loadByEmail(this.email).subscribe(user => {
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
    this.service.adminUpdate(user).subscribe(() => {
      this.activeModal.close(user)
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
