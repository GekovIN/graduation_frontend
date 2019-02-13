import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../services/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AppRoutesPaths} from "../../app.routes.paths";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChangePasswordModalFormComponent} from "../change-password-modal-form/change-password-modal-form.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private editForm: FormGroup;
  private profile: User;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private modalService: NgbModal
  ) { }

  get f() { return this.editForm.controls; }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required]],
    });

    this.userService.loadProfile().subscribe(profile => {
      console.log("### Loaded profile: " + JSON.stringify(profile));
      this.profile = profile;
      this.f.name.setValue(profile.name);
      this.f.email.setValue(profile.email);
    });

  }

  onSubmit() {
    this.submitted = true;
    this.profile.name = this.f.name.value;
    this.profile.email = this.f.email.value;

    let user = new User();
    user.email = this.f.email.value;
    user.name = this.f.name.value;

    this.userService.profileUpdate(user).subscribe(() => {
      console.log('### Profile updated');
      this.userService.updateProfileSessionStorage(user.email, user.name);
      this.router.navigate([AppRoutesPaths.profilePath])
    })
  }

  openChangePasswordModalForm() {
    let modalRef = this.modalService.open(ChangePasswordModalFormComponent);
    modalRef.result.then(() => {
      console.log('### Profile password updated');
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }
}
