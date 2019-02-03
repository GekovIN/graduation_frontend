import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

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
    private appComponent: AppComponent,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
    sessionStorage.setItem('token', '');
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

    sessionStorage.setItem('token', btoa(this.email + ':' + this.password));
    sessionStorage.setItem('email', this.email);
    this.appComponent.ngOnInit();
    this.userService.login().subscribe(
      data => {
        this.router.navigate(['restaurants'])
      }, error => {
        sessionStorage.setItem('token', '');
        alert('Authorization failed.')
      }
    );


  }

}
