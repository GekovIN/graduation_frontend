import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Restaurant} from "./restaurant";

const apiUrl: string = 'http://localhost:8080/graduation/restaurants/';
const date: string = '2018-10-31';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) {}

  loadAllWithMenuForDate(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Array<Restaurant>>(apiUrl + 'menus?date=' + date, { headers });
  }

  loadAll() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Array<Restaurant>>(apiUrl, {headers});
  }

// https://stackoverflow.com/questions/36458383/angular-2-http-delete-doesnt-make-network-requests
  delete(restaurant: Restaurant) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.delete(apiUrl + restaurant.id, { headers });
  }

  create(restaurant: Restaurant) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.post(apiUrl, restaurant, { headers });
  }

  getById(id: number) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.get<Restaurant>(apiUrl + id, { headers });
  }

  update(restaurant: Restaurant) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.http.put(apiUrl + restaurant.id, restaurant, { headers });
  }
}
