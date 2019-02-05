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
}
