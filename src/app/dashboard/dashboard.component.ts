import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../services/restaurant";
import {RestaurantService} from "../services/restaurant.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  restaurants: Array<Restaurant>;

  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.service.loadAll().subscribe(restaurants => {
      this.restaurants = restaurants});
  }

}
