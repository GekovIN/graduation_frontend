import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.userService.buildUserFormGroup();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.email = this.f.email.value;
    this.password = this.f.password.value;
    this.loading = true;

    this.userService.login(this.email, this.password).subscribe(
      () => {
        this.userService.populateSessionStorage(this.email, this.password);
        this.router.navigate(['restaurants'])
      }, error => {
        this.userService.clearSessionStorage();
        alert('Authorization failed.')
      }
    );


  }

}
