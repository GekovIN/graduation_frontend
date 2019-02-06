import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {RestaurantListComponent} from "../../restaurants/restaurant-list/restaurant-list.component";
import {Restaurant} from "../../services/restaurant";
import {Dish} from "../../services/dish";
import {DishService} from "../../services/dish.service";
import {MenuService} from "../../services/menu.service";
import {MenuListComponent} from "../menu-list/menu-list.component";

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  static componentPath = 'menu-add';

  private restaurants: Restaurant[];
  private dishes: Dish[];

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restaurantService: RestaurantService,
    private dishService: DishService,
    private menuService: MenuService) {}

  addForm: FormGroup;

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      restaurantId: ['', [Validators.required]],
      dishId: ['', [Validators.required]]
    });

    this.restaurantService.loadAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    });

    this.dishService.loadAll().subscribe(dishes => {
      this.dishes = dishes;
    })
  }

  onSubmit() {
    this.submitted = true;
    this.menuService.create(this.addForm.value).subscribe(
      () => {
        this.router.navigate([MenuListComponent.componentPath])
      }
    )
  }
}
