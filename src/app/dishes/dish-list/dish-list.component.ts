import { Component, OnInit } from '@angular/core';
import {Dish} from "../../services/dish";
import {DishService} from "../../services/dish.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DishEditModalFormComponent} from "../dish-edit-modal-form/dish-edit-modal-form.component";
import {DishAddModalFormComponent} from "../dish-add-modal-form/dish-add-modal-form.component";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];

  constructor(
    private dishService: DishService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.dishService.loadAll().subscribe(dishes => {
      this.dishes = dishes;
      console.log('### Loaded ' + dishes.length + " dishes")
    })
  }

  delete(dish: Dish) {
    this.dishService.delete(dish).subscribe(() => {
      console.log('### Dish deleted: ' + JSON.stringify(dish));
      this.dishes = this.dishes.filter(d => d !== dish);
    })
  }

  openAddFormModal() {
    const modalRef = this.modalService.open(DishAddModalFormComponent);
    modalRef.result.then(created => {
      console.log('### Dish created: ' + JSON.stringify(created));
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }

  openEditFormModal(id) {
    const modalRef = this.modalService.open(DishEditModalFormComponent);
    modalRef.componentInstance.dishId = id;
    modalRef.result.then(() => {
      console.log('### Dish updated');
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error:' + error);
    });
  }
}
