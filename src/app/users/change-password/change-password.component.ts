import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppRoutesPaths} from "../../app.routes.paths";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PasswordTo} from "../../services/passwordTo";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private passwordForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

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

    this.userService.changePassword(passwordTo).subscribe(() => {
      console.log("### Password changed");
      this.userService.updateSessionPassword(passwordTo.newPassword);
      this.router.navigate([AppRoutesPaths.profilePath])
    })
  }
}
