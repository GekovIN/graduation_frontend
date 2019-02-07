import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {VoteListComponent} from "../vote-list/vote-list.component";
import {VoteListByDateComponent} from "../vote-list-by-date/vote-list-by-date.component";

@Component({
  selector: 'app-vote-controller',
  templateUrl: './vote-controller.component.html',
  styleUrls: ['./vote-controller.component.css']
})
export class VoteControllerComponent implements OnInit {

  static componentPath = 'vote-controller';
  private dateFilterForm: FormGroup;
  private date;

  constructor(
    private router: Router,

  ) { }


  ngOnInit(): void {
    this.dateFilterForm = new FormGroup({date: new FormControl()})
  }

  showByDate() {
    this.date = this.dateFilterForm.controls.date.value;
    // https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular
    this.router.navigate([VoteListByDateComponent.componentPath, this.date])
  }

  showAll() {
    this.router.navigate([VoteListComponent.componentPath])
  }

}
