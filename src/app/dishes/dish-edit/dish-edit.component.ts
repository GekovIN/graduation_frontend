import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {Dish} from "../../services/dish";
import {DishService} from "../../services/dish.service";
import {DishListComponent} from "../dish-list/dish-list.component";

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.css']
})
export class DishEditComponent implements OnInit {
  static componentPath = 'dish-edit';

  dish: Dish;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: DishService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {
    let restaurantId = localStorage.getItem('editRestaurantId');
    if (!restaurantId) {
      alert("Invalid action.");
      this.router.navigate([DishListComponent.componentPath]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: ['', [Validators.required]]
    });

    this.service.getById(+restaurantId).subscribe(restaurant => {
      this.editForm.setValue(restaurant);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe(() => this.router.navigate([DishListComponent.componentPath]))
  }
}
