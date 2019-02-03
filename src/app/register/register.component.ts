import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.email = this.f.email.value;
    this.password = this.f.password.value;
    this.loading = true;

    this.userService.register(this.registerForm.value).subscribe(
        next => {
          sessionStorage.setItem('token', btoa(this.email + ':' + this.password));
          sessionStorage.setItem('email', this.email);
          this.appComponent.ngOnInit();
          this.router.navigate(['restaurants'])
        }, error => {
          alert('Authorization failed.')
        }
    );
  }

}
