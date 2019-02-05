import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {DishListComponent} from "../dish-list/dish-list.component";

@Component({
  selector: 'app-dish-add',
  templateUrl: './dish-add.component.html',
  styleUrls: ['./dish-add.component.css']
})
export class DishAddComponent implements OnInit {

  static componentPath = 'dish-add';
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dishService: DishService) {}

  addForm: FormGroup;

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: ['', [Validators.min(0), Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.dishService.create(this.addForm.value).subscribe(
      () => {
        this.router.navigate([DishListComponent.componentPath])
      }
    )
  }

}
