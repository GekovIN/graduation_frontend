import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Restaurant} from "./restaurant";

const apiUrl: string = 'http://localhost:8080/graduation/restaurants/';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  constructor(private http: HttpClient) {}

  loadAllWithMenuForDate(){
    let currentDate = new Date();
    // let dateParam = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate();
    let dateParam = currentDate.toISOString().slice(0, 10);
    return this.http.get<Array<Restaurant>>(apiUrl + 'menus?date=' + dateParam);
  }

  loadAll() {
    return this.http.get<Array<Restaurant>>(apiUrl);
  }

// https://stackoverflow.com/questions/36458383/angular-2-http-delete-doesnt-make-network-requests
  delete(restaurant: Restaurant) {
    return this.http.delete(apiUrl + restaurant.id);
  }

  create(restaurant: Restaurant) {
    return this.http.post(apiUrl, restaurant);
  }

  getById(id: number) {
    return this.http.get<Restaurant>(apiUrl + id);
  }

  update(restaurant: Restaurant) {
    return this.http.put(apiUrl + restaurant.id, restaurant);
  }

  loadAllWithMenuByDate(date: string) {
    return this.http.get<Array<Restaurant>>(apiUrl + 'menus?date=' + date);
  }

  loadVotesCountByIdAndDate(id: number, date: string) {
    return this.http.get<number>('http://localhost:8080/graduation/votes/count?id=' + id + '&date=' + date);
  }

  loadAllWithVoteByDate(date: string) {
    return this.http.get<Array<Restaurant>>(apiUrl + 'votes?date=' + date);
  }
}
