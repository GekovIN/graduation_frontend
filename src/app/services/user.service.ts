import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegistrationTo} from "./registrationTo";
import {User} from "./user";
import {PasswordTo} from "./passwordTo";

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

  register(user: RegistrationTo) {
    return this.http.post<User>("http://localhost:8080/graduation/profile/register", user);
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password)});
    return this.http.get<User>("http://localhost:8080/graduation/profile", { headers });
  }

  setSessionToken() {
    let email = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');
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

  changePassword(passwordTo: PasswordTo) {
    return this.http.post("http://localhost:8080/graduation/profile/changePass", passwordTo);
  }

  updateProfileSessionStorage(email: string, name: string) {
    this.updateSessionEmail(email);
    this.updateSessionLoggedUser(email, name);
  }

  updateSessionEmail(email: string) {
    sessionStorage.removeItem('email');
    sessionStorage.setItem('email', email);
    this.setSessionToken();
  }

  updateSessionLoggedUser(email: string, name:string) {
    let loggedUser : User = JSON.parse(sessionStorage.getItem('loggedUser'));
    loggedUser.email = email;
    loggedUser.name = name;
    sessionStorage.removeItem('loggedUser');
    sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
  }

  updateSessionPassword(password: string) {
    sessionStorage.removeItem('password');
    sessionStorage.setItem('password', password);
    this.setSessionToken();
  }

  populateLoginSessionStorage(email: string, password: string, user: User) {
    sessionStorage.clear();
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('loggedUser', JSON.stringify(user));
    this.setSessionToken();
  }
}
