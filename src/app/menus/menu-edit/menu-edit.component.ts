import { Component, OnInit } from '@angular/core';
import {Dish} from "../../services/dish";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {first} from "rxjs/operators";
import {MenuService} from "../../services/menu.service";
import {MenuListComponent} from "../menu-list/menu-list.component";
import {Restaurant} from "../../services/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  static componentPath: 'menu-edit';

  private restaurants: Restaurant[];
  private dishes: Dish[];

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menuService: MenuService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {
    let menuId = localStorage.getItem('editMenuId');
    if (!menuId) {
      alert("Invalid action.");
      this.router.navigate([MenuListComponent.componentPath]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      restaurant: ['', [Validators.required]],
      dish: ['', [Validators.required]]
    });

    this.menuService.getById(+menuId).subscribe(menu => {
      this.f.id.setValue(menu.id);
      this.f.date.setValue(menu.date);
      this.f.restaurant.setValue(menu.restaurant.id);
      this.f.dish.setValue(menu.dish.id);
    });

    this.restaurantService.loadAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    });

    this.dishService.loadAll().subscribe(dishes => {
      this.dishes = dishes;
    });

  }

  onSubmit() {

    this.submitted = true;

    let id = this.f.id.value;
    let date = this.f.date.value;
    let restaurantId = this.f.restaurant.value;
    let dishId = this.f.dish.value;

    this.menuService.update({id, date, restaurantId, dishId})
      .pipe(first())
      .subscribe(() => this.router.navigate([MenuListComponent.componentPath]))
  }

}
