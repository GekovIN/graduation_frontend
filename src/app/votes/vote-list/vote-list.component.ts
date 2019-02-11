import { Component, OnInit } from '@angular/core';
import {VoteService} from "../../services/vote.service";
import {Vote} from "../../services/vote";

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  votes: Array<Vote>;

  constructor(
    private service: VoteService) { }

  ngOnInit() {
    this.service.loadAll().subscribe(
      votes => {this.votes = votes});
  }
}
