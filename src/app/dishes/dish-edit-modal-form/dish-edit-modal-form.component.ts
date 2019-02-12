import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../services/dish";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {AppRoutesPaths} from "../../app.routes.paths";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dish-edit-modal-form',
  templateUrl: './dish-edit-modal-form.component.html',
  styleUrls: ['./dish-edit-modal-form.component.css']
})
export class DishEditModalFormComponent implements OnInit {

  @Input() dishId: number;

  dish: Dish;
  editForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: DishService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: ['', [Validators.required]]
    });

    this.service.getById(+this.dishId).subscribe(dish => {
      this.dish = dish;
      this.editForm.setValue(dish);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.update(this.editForm.value).subscribe(() => {
      this.router.navigate([AppRoutesPaths.dishListPath]);
      this.activeModal.close(this.editForm.value)
    })
  }

}
