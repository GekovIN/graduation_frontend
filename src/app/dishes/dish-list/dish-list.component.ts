import { Component, OnInit } from '@angular/core';
import {Dish} from "../../services/dish";
import {Router} from "@angular/router";
import {DishService} from "../../services/dish.service";
import {AppRoutesPaths} from "../../app.routes.paths";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DishEditModalFormComponent} from "../dish-edit-modal-form/dish-edit-modal-form.component";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];

  constructor(
    private router: Router,
    private dishService: DishService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.dishService.loadAll().subscribe(dishes => {
      this.dishes = dishes;
      console.log('### Loaded ' + dishes.length + " dishes")
    })
  }

  add() {
    this.router.navigate([AppRoutesPaths.dishAddPath]);
  }

  delete(dish: Dish) {
    this.dishService.delete(dish).subscribe(() => {
      this.dishes = this.dishes.filter(d => d !== dish);
    })
  }

  openEditFormModal(id) {
    const modalRef = this.modalService.open(DishEditModalFormComponent);
    modalRef.componentInstance.dishId = id;

    modalRef.result.then(result => {
      console.log('form result >>');
      console.log(result);
      this.ngOnInit();
    }).catch((error) => {
      console.log('from error >>');
      console.log(error);
    });
  }
}
