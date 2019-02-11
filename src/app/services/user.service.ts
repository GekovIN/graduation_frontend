import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoggedUser} from "./loggedUser";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Creating observable data (loggedUser) to use in HeaderComponent
  // https://medium.com/@weswhite/angular-behaviorsubject-service-60485ef064fc
  // private loggedUser = new BehaviorSubject<LoggedUser>(new LoggedUser('', ''));
  // currentUser = this.loggedUser.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  register(user: LoggedUser) {
    return this.http.post("http://localhost:8080/graduation/profile/register", user);
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get<User>("http://localhost:8080/graduation/profile", { headers });
  }

  populateSessionStorage(email: string, password: string) {
    sessionStorage.setItem('token', btoa(email + ':' + password));
  }

  // // Updating observable from headerComponent data:
  // updateLoggedUser(currentUser: LoggedUser) {
  //   this.loggedUser.next(currentUser);
  // }

  clearSessionStorage() {
    sessionStorage.clear();
    localStorage.clear();
  }

  loadByEmail(email: string) {
    return this.http.get<User>("http://localhost:8080/graduation/admin/users/by?email=" + email.toLowerCase());
  }

  adminUpdate(user: User) {
    return this.http.put<User>("http://localhost:8080/graduation/admin/users/" + user.id, user);
  }

  loadAll() {
    return this.http.get<Array<User>>("http://localhost:8080/graduation/admin/users");
  }

  delete(id: number) {
    return this.http.delete("http://localhost:8080/graduation/admin/users/" + id);
  }

  loadProfile() {
    return this.http.get<User>("http://localhost:8080/graduation/profile");
  }

  profileUpdate(profile: User) {
    return this.http.put("http://localhost:8080/graduation/profile", profile);
  }
}
