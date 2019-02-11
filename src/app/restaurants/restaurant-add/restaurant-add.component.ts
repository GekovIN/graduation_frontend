import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RestaurantService) {}

  addForm: FormGroup;

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      address: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.addForm.value).subscribe(
      () => {
        this.router.navigate([AppRoutesPaths.restaurantListPath])
      }
    )
  }
}
