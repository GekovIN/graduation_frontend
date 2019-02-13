import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Restaurant} from "../../services/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-edit-modal-form',
  templateUrl: './restaurant-edit-modal-form.component.html',
  styleUrls: ['./restaurant-edit-modal-form.component.css']
})
export class RestaurantEditModalFormComponent implements OnInit {

  @Input() restaurantId: number;

  restaurant: Restaurant;
  editForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: RestaurantService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      address: ['', [Validators.required]]
    });

    this.service.getById(this.restaurantId).subscribe(restaurant => {
      this.restaurant = restaurant;
      this.editForm.setValue(restaurant);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.update(this.editForm.value).subscribe(() => {
      this.activeModal.close(this.editForm.value)
    })
  }

}
