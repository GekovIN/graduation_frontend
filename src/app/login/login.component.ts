import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../app.routes.paths";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
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
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
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

    this.userService.login(this.email, this.password).subscribe(
      user => {
        this.userService.populateLoginSessionStorage(this.email, this.password, user);
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      }, error => {
        this.userService.clearSessionStorage();
        this.handlerError(error);
      }
    );
  }

  handlerError(error: Response) {
    if (error.status == 401) {
      alert('Login failed');
    }
  }

  //Dev methods
  admin() {
    this.userService.login('admin@gmail.com', 'admin').subscribe(
      user => {
        sessionStorage.clear();
        sessionStorage.setItem('email', 'admin@gmail.com');
        sessionStorage.setItem('password', 'admin');
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        this.userService.setSessionToken();
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      });
  }

  user() {
    this.userService.login('user1@yandex.ru', 'password1').subscribe(
      user => {
        sessionStorage.clear();
        sessionStorage.setItem('email', 'user1@yandex.ru');
        sessionStorage.setItem('password', 'password1');
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        this.userService.setSessionToken();
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      });
  }
}
