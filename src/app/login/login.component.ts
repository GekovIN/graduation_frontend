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
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
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

  //Dev methods
  admin() {
    this.userService.login('admin@gmail.com', 'admin').subscribe(
      () => {
        this.userService.populateSessionStorage('admin@gmail.com', 'admin');
        this.router.navigate(['restaurants'])
      });
  }

  user() {
    this.userService.login('user1@yandex.ru', 'password1').subscribe(
      () => {
        this.userService.populateSessionStorage('user1@yandex.ru', 'password1');
        this.router.navigate(['restaurants'])
      });
  }
}
