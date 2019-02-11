import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-user-controller',
  templateUrl: './user-controller.component.html',
  styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent implements OnInit {

  private emailFilterForm: FormGroup;
  private email: string;

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
    this.emailFilterForm = new FormGroup({email: new FormControl()})
  }

  showByEmail() {
    this.email = this.emailFilterForm.controls.email.value;
    localStorage.removeItem('userEditEmail');
    localStorage.setItem('userEditEmail', this.email);
    this.router.navigate([AppRoutesPaths.userEditPath])
  }

  showAll() {
    this.router.navigate([AppRoutesPaths.userListPath])
  }
}
