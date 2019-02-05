import { Component, OnInit } from '@angular/core';
import {Dish} from "../../services/dish";
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {DishAddComponent} from "../dish-add/dish-add.component";
import {DishEditComponent} from "../dish-edit/dish-edit.component";

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
    private dishService: DishService
  ) { }

  ngOnInit() {
    this.dishService.loadAll().subscribe(
      dishes => {this.dishes = dishes;}
    )
  }

  add() {
    this.router.navigate([DishAddComponent.componentPath]);
  }

  delete(dish: Dish) {
    this.dishService.delete(dish).subscribe(() => {
      this.dishes = this.dishes.filter(d => d !== dish);
    })
  }

  edit(dish: Dish) {
    localStorage.removeItem('editDishId');
    localStorage.setItem('editDishId', dish.id.toString());
    this.router.navigate([DishEditComponent.componentPath]);
  }
}
