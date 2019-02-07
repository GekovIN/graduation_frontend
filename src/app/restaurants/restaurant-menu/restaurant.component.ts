import {Component, Input, OnInit} from '@angular/core';
import { Restaurant } from "../../services/restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit{
  @Input() restaurant: Restaurant;
  @Input() date: string;


  constructor(
    private service: RestaurantService
  ) {
  }

  private votesCount: number;

  ngOnInit(): void {
      this.service.loadVotesCountByIdAndDate(this.restaurant.id, this.date).subscribe(votesCount =>{
        this.votesCount = votesCount;
      });
  }
}
