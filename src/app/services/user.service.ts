import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoggedUser} from "./loggedUser";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Creating observable data (loggedUser) to use in HeaderComponent
  // https://medium.com/@weswhite/angular-behaviorsubject-service-60485ef064fc
  private loggedUser = new BehaviorSubject<LoggedUser>(new LoggedUser('', ''));
  currentUser = this.loggedUser.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  register(user: LoggedUser) {
    return this.http.post("http://localhost:8080/graduation/profile/register", user);
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get("http://localhost:8080/graduation/profile/login", { headers });
  }

  populateSessionStorage(email: string, password: string) {
    sessionStorage.setItem('token', btoa(email + ':' + password));
    let user = new LoggedUser(email, password);
    this.updateLoggedUser(user);
  }

  // Updating observable from headerComponent data:
  updateLoggedUser(currentUser: LoggedUser) {
    this.loggedUser.next(currentUser);
  }

  clearSessionStorage() {
    sessionStorage.clear();
    localStorage.clear();
    this.loggedUser.next(undefined);
  }
}
