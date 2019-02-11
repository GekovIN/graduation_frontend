import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurant} from "../../services/restaurant";

@Component({
  selector: 'app-menu-list-by-date',
  templateUrl: './menu-list-by-date.component.html',
  styleUrls: ['./menu-list-by-date.component.css']
})
export class MenuListByDateComponent implements OnInit {
  private date;
  private restaurants: Array<Restaurant>;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    this.restaurantService.loadAllWithMenuByDate(this.date).subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

}
