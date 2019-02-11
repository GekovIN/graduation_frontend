import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {first} from "rxjs/operators";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {

  restaurant: Restaurant;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RestaurantService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {
    let restaurantId = localStorage.getItem('editRestaurantId');
    if (!restaurantId) {
      alert("Invalid action.");
      this.router.navigate([AppRoutesPaths.restaurantListPath]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      address: ['', [Validators.required]]
    });

    this.service.getById(+restaurantId).subscribe(restaurant => {
      this.editForm.setValue(restaurant);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe(() => this.router.navigate([AppRoutesPaths.restaurantListPath]))
  }
}
