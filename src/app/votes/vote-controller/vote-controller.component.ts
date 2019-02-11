import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-vote-controller',
  templateUrl: './vote-controller.component.html',
  styleUrls: ['./vote-controller.component.css']
})
export class VoteControllerComponent implements OnInit {

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
    this.router.navigate([AppRoutesPaths.voteListByDatePath, this.date])
  }

  showAll() {
    this.router.navigate([AppRoutesPaths.voteListPath])
  }

}
