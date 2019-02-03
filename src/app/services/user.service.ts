import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post("http://localhost:8080/graduation/profile/register", user);
  }

  login() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get("http://localhost:8080/graduation/profile/login", { headers });
  }
}
