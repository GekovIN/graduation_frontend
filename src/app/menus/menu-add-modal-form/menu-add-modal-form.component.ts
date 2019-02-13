import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuService} from "../../services/menu.service";
import {Restaurant} from "../../services/restaurant";
import {Dish} from "../../services/dish";
import {RestaurantService} from "../../services/restaurant.service";
import {DishService} from "../../services/dish.service";

@Component({
  selector: 'app-menu-add-modal-form',
  templateUrl: './menu-add-modal-form.component.html',
  styleUrls: ['./menu-add-modal-form.component.css']
})
export class MenuAddModalFormComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  restaurants: Restaurant[];
  dishes: Dish[];

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private dishService: DishService,
    private menuService: MenuService
  ) { }

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
    this.menuService.create(this.addForm.value).subscribe(menu => {
      this.activeModal.close(menu)
    })
  }

}
