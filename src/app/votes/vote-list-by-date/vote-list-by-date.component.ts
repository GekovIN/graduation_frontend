import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-vote-list-by-date',
  templateUrl: './vote-list-by-date.component.html',
  styleUrls: ['./vote-list-by-date.component.css']
})
export class VoteListByDateComponent implements OnInit {

  private date;
  private restaurants: Array<Restaurant>;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    this.restaurantService.loadAllWithVoteByDate(this.date).subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }

}
