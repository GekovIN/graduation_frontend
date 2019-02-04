import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../services/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class HeaderComponent implements OnInit {

  title = 'Restaurants vote system';
  loggedUser: User;

  constructor(private router: Router,
              private userService: UserService) {}

  // Subscribing to current user data to use in html view
  ngOnInit(): void {
    this.userService.currentUser.subscribe(currentUser => {
      this.loggedUser = currentUser;
    })
  }

  logout() {
    this.userService.clearSessionStorage();
    this.router.navigate(['login']);
  }

}
