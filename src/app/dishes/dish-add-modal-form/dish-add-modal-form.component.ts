import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {DishService} from "../../services/dish.service";

@Component({
  selector: 'app-dish-add-modal-form',
  templateUrl: './dish-add-modal-form.component.html',
  styleUrls: ['./dish-add-modal-form.component.css']
})
export class DishAddModalFormComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private service: DishService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      price: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.service.create(this.addForm.value).subscribe(dish => {
      this.activeModal.close(dish)
    })
  }

}
