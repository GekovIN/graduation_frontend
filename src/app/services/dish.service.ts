import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dish} from "./dish";

const apiUrl = 'http://localhost:8080/graduation/dishes/';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  loadAll() {
    return this.http.get<Array<Dish>>(apiUrl);
  }

  create(dish: Dish) {
    return this.http.post(apiUrl, dish);
  }

  delete(dish: Dish) {
    return this.http.delete(apiUrl + dish.id);
  }

  getById(id: number) {
    return this.http.get<Dish>(apiUrl + id);
  }

  update(dish: Dish) {
    return this.http.put(apiUrl + dish.id, dish);
  }
}
