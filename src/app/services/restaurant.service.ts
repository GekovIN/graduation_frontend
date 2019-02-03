import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Restaurant} from "./restaurant";

const apiUrl: string = 'http://localhost:8080/graduation/restaurants/';
const date: string = '2018-10-31';
// const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin@gmail.com:admin')})

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) {}

  // loadAll(){
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('admin@gmail.com:admin')});
  //   return this.http.get<Array<Restaurant>>(apiUrl + 'menus?date=' + date, { headers });
  // }

  loadAll(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Array<Restaurant>>(apiUrl + 'menus?date=' + date, { headers });
  }
}
