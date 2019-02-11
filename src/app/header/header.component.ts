import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {LoggedUser} from "../services/loggedUser";
import {User} from "../services/user";
import {AppRoutesPaths} from "../app.routes.paths";

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
  menuController = AppRoutesPaths.menuControllerPath;
  voteController = AppRoutesPaths.voteControllerPath;
  restaurantList = AppRoutesPaths.restaurantListPath;
  dishList = AppRoutesPaths.dishListPath;
  userController = AppRoutesPaths.userControllerPath;
  profile = AppRoutesPaths.profilePath;
  dateMenuList = AppRoutesPaths.dateMenuListPath;

  constructor(private router: Router,
              private userService: UserService) {}

  // Subscribing to current user data to use in html view
  ngOnInit(): void {
    // this.userService.currentUser.subscribe(currentUser => {
    //   this.loggedUser = currentUser;
    // })
  }

  // Get logged user from storage (in string) if exists and parse it to Object
  get loggedUser() : User {
    let userStr = sessionStorage.getItem('loggedUser');
    if (userStr !== '' && userStr) {
      return JSON.parse(userStr);
    }
    else return null;
  }

  get isAdmin() : boolean {
    if (this.loggedUser)  {
      return this.loggedUser.roles.includes('ROLE_ADMIN');
    }
    return false;
  }

  logout() {
    this.userService.clearSessionStorage();
    this.router.navigate(['login']);
  }

}
