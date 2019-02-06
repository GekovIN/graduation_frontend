import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MenuListComponent} from "../menu-list/menu-list.component";
import {MenuAddComponent} from "../menu-add/menu-add.component";
import {MenuListByDateComponent} from "../menu-list-by-date/menu-list-by-date.component";

@Component({
  selector: 'app-menu-controller',
  templateUrl: './menu-controller.component.html',
  styleUrls: ['./menu-controller.component.css']
})
export class MenuControllerComponent implements OnInit {

  static componentPath = 'menu-controller';
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
    this.router.navigate([MenuListByDateComponent.componentPath, this.date])
  }

  showAll() {
    this.router.navigate([MenuListComponent.componentPath])
  }

  add() {
    this.router.navigate([MenuAddComponent.componentPath])
  }

}
