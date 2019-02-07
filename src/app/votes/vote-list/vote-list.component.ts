import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VoteService} from "../../services/vote.service";
import {Vote} from "../../services/vote";

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {

  static componentPath = 'votes';
  votes: Array<Vote>;

  constructor(
    private service: VoteService,
    private router: Router) { }

  ngOnInit() {
    this.service.loadAll().subscribe(
      votes => {this.votes = votes});
  }
}
