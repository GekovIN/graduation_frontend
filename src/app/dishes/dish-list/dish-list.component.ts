import { Component, OnInit } from '@angular/core';
import {Dish} from "../../services/dish";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {DishService} from "../../services/dish.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  static componentPath = 'dishes';
  dishes: Dish[];

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.dishService.loadAll().subscribe(
      dishes => {this.dishes = dishes;}
    )
  }

  add() {

  }

  delete(dish: Dish) {

  }

  edit(dish: Dish) {

  }
}
