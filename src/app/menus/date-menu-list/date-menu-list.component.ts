import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-date-menu-list',
  templateUrl: './date-menu-list.component.html',
  styleUrls: ['./date-menu-list.component.css']
})
export class DateMenuListComponent implements OnInit {

  static componentPath = 'date-menus';
  restaurantsWithMenu: Array<Restaurant>;

  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.service.loadAllWithMenuForDate().subscribe(
      restaurants => {this.restaurantsWithMenu = restaurants});
  }

  vote(id: number) {

  }
}
