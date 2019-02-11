import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {DateMenuListComponent} from "../menus/date-menu-list/date-menu-list.component";
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
        this.userService.populateSessionStorage(this.email, this.password);
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
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
        this.userService.populateSessionStorage('admin@gmail.com', 'admin');
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      });
  }

  user() {
    this.userService.login('user1@yandex.ru', 'password1').subscribe(
      user => {
        this.userService.populateSessionStorage('user1@yandex.ru', 'password1');
        //https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        console.log('### Logged user: ' + JSON.stringify(user));
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
        this.router.navigate([AppRoutesPaths.dateMenuListPath])
      });
  }
}
