import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../services/restaurant";

@Component({
  selector: 'app-restaurant-vote',
  templateUrl: './restaurant-vote.component.html',
  styleUrls: ['./restaurant-vote.component.css']
})
export class RestaurantVoteComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
