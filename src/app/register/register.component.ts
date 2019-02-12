import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../app.routes.paths";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.email = this.f.email.value;
    this.password = this.f.password.value;

    this.userService.register(this.registerForm.value).subscribe(
      user => {
        this.userService.populateLoginSessionStorage(this.email, this.password, user);
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      }, error => {
        this.userService.clearSessionStorage();
        this.handlerError(error);
      }
    );
  }

  errorMessage: string = '';
  handlerError(error) {
    for (let detail of error.error.details) {
      this.errorMessage += detail + "\n";
    }
    alert(this.errorMessage);
  }
}
