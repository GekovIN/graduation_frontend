import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MenuDish} from "./menuDish";
import {MenuDishTo} from "./menu-dish-to";

const apiUrl: string = 'http://localhost:8080/graduation/menus/';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<Array<MenuDish>>(apiUrl);
  }

// https://stackoverflow.com/questions/36458383/angular-2-http-delete-doesnt-make-network-requests
  delete(menu: MenuDish) {
    return this.http.delete(apiUrl + menu.id);
  }

  update(menuTo: MenuDishTo) {
    return this.http.put(apiUrl + menuTo.id, menuTo);
  }
  create(menuTo: MenuDishTo) {
    return this.http.post(apiUrl, menuTo);
  }

  getById(id: number) {
    return this.http.get<MenuDish>(apiUrl + id);
  }
}
