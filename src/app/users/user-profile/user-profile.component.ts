import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../services/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserControllerComponent} from "../user-controller/user-controller.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private editForm: FormGroup;
  private profile: User;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  get f() { return this.editForm.controls; }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required]],
    });

    this.userService.loadProfile().subscribe(profile => {
      console.log("### Loaded profile: " + JSON.stringify(profile));
      this.profile = profile;
      this.f.name.setValue(profile.name);
      this.f.email.setValue(profile.email);
    });

  }

  onSubmit() {
    this.submitted = true;
    this.profile.name = this.f.name.value;
    this.profile.email = this.f.email.value;

    let user = new User();
    user.email = this.f.email.value;
    user.name = this.f.name.value;

    this.userService.profileUpdate(user).subscribe(updated =>
    {
      console.log('### Updated profile: ' + JSON.stringify(updated));
      this.router.navigate(['/profile'])
    })
  }

}
