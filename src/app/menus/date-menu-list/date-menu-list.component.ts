import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {RestaurantService} from "../../services/restaurant.service";
import {VoteService} from "../../services/vote.service";

@Component({
  selector: 'app-date-menu-list',
  templateUrl: './date-menu-list.component.html',
  styleUrls: ['./date-menu-list.component.css']
})
export class DateMenuListComponent implements OnInit {

  restaurantsWithMenu: Array<Restaurant>;

  constructor(private service: RestaurantService,
              private voteService: VoteService) { }

  ngOnInit() {
    this.service.loadAllWithMenuForDate().subscribe(restaurants => {
      this.restaurantsWithMenu = restaurants;
      restaurants.forEach(r => console.log('### Loaded restaurant: ' + r.name));
    });
  }

  vote(id: number) {
    this.voteService.vote(id).subscribe(vote => {
      localStorage.setItem('currentVote', vote.restaurant.name);
      console.log('### Current vote: ' + vote.restaurant.name + 'by user + ' + vote.user.email);
    });
  }

  get currentVote() : string {
    return localStorage.getItem('currentVote');
  }
}
