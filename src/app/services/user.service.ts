import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";
import {HeaderComponent} from "../header/header.component";
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
    private headerComponent: HeaderComponent,
    private formBuilder: FormBuilder
  ) { }

  register(user: User) {
    return this.http.post("http://localhost:8080/graduation/profile/register", user);
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get("http://localhost:8080/graduation/profile/login", { headers });
  }

  populateSessionStorage(email: string, password: string) {
    sessionStorage.setItem('token', btoa(email + ':' + password));
    sessionStorage.setItem('email', email);
    this.headerComponent.ngOnInit();
  }

  clearSessionStorage() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('email', '');
    this.headerComponent.ngOnInit();
  }

  buildUserFormGroup() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
}
