import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-add-modal-form',
  templateUrl: './restaurant-add-modal-form.component.html',
  styleUrls: ['./restaurant-add-modal-form.component.css']
})
export class RestaurantAddModalFormComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: RestaurantService
  ) { }

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
    this.service.create(this.addForm.value).subscribe(restaurant => {
      this.activeModal.close(restaurant)
    })
  }


}
