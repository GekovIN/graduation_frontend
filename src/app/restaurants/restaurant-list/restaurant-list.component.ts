import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {Router} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RestaurantAddModalFormComponent} from "../restaurant-add-modal-form/restaurant-add-modal-form.component";
import {RestaurantEditModalFormComponent} from "../restaurant-edit-modal-form/restaurant-edit-modal-form.component";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(
    private router: Router,
    private service: RestaurantService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.service.loadAll()
      .subscribe(data => {
        this.restaurants = data;
      })
  }

  openAddModalForm() {
    let modalRef = this.modalService.open(RestaurantAddModalFormComponent);
    modalRef.result.then(created => {
      console.log('### Restaurant created: ' + JSON.stringify(created));
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }

  openEditModalForm(id: number) {
    let modalRef = this.modalService.open(RestaurantEditModalFormComponent);
    modalRef.componentInstance.restaurantId = id;
    modalRef.result.then(() => {
      console.log('### Restaurant updated');
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }

  delete(restaurant: Restaurant) {
    this.service.delete(restaurant).subscribe(() => {
      this.restaurants = this.restaurants.filter(r => r !== restaurant);
    });
  }
}
