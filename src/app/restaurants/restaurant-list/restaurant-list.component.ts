import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private router: Router,
    private service: RestaurantService
  ) { }

  ngOnInit() {
    this.service.loadAll()
      .subscribe(data => {
        this.restaurants = data;
      })
  }

  add() {
    this.router.navigate([AppRoutesPaths.restaurantAddPath]);
  }

  edit(restaurant: Restaurant) {
    localStorage.removeItem('editRestaurantId');
    localStorage.setItem('editRestaurantId', restaurant.id.toString());
    this.router.navigate([AppRoutesPaths.restaurantEditPath]);
  }

  delete(restaurant: Restaurant) {
    this.service.delete(restaurant).subscribe(() => {
      this.restaurants = this.restaurants.filter(r => r !== restaurant);
    });
  }
}
