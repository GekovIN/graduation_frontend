import { Component, Input } from '@angular/core';
import { Restaurant } from "../services/restaurant";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
  @Input() restaurant: Restaurant;
}
