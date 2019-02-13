import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../../app.routes.paths";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserEditModalFormComponent} from "../user-edit-modal-form/user-edit-modal-form.component";

@Component({
  selector: 'app-user-controller',
  templateUrl: './user-controller.component.html',
  styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent implements OnInit {

  private emailFilterForm: FormGroup;

  constructor(
    private router : Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.emailFilterForm = new FormGroup({email: new FormControl()})
  }

  showByEmail() {
    const email = this.emailFilterForm.controls.email.value;
    const modalRef = this.modalService.open(UserEditModalFormComponent);
    modalRef.componentInstance.email = email;
    modalRef.result.then(() => {
      console.log('### User updated');
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error:' + error);
    });
  }

  showAll() {
    this.router.navigate([AppRoutesPaths.userListPath])
  }
}
