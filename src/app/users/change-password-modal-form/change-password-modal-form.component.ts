import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../services/user.service";
import {PasswordTo} from "../../services/passwordTo";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-change-password-modal-form',
  templateUrl: './change-password-modal-form.component.html',
  styleUrls: ['./change-password-modal-form.component.css']
})
export class ChangePasswordModalFormComponent implements OnInit {

  passwordForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: UserService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.passwordForm.controls; }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    let passwordTo: PasswordTo = this.passwordForm.value;

    this.service.changePassword(passwordTo).subscribe(() => {
      console.log("### Password changed");
      this.service.updateSessionPassword(passwordTo.newPassword);
      this.activeModal.close()
    })
  }

}
