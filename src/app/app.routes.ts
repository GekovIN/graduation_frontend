import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {DateMenuListComponent} from "./menus/date-menu-list/date-menu-list.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantListComponent} from "./restaurants/restaurant-list/restaurant-list.component";
import {RestaurantAddComponent} from "./restaurants/restaurant-add/restaurant-add.component";
import {RestaurantEditComponent} from "./restaurants/restaurant-edit/restaurant-edit.component";
import {DishListComponent} from "./dishes/dish-list/dish-list.component";
import {DishAddComponent} from "./dishes/dish-add/dish-add.component";
import {DishEditComponent} from "./dishes/dish-edit/dish-edit.component";
import {MenuListComponent} from "./menus/menu-list/menu-list.component";
import {MenuAddComponent} from "./menus/menu-add/menu-add.component";
import {MenuEditComponent} from "./menus/menu-edit/menu-edit.component";
import {MenuControllerComponent} from "./menus/menu-controll/menu-controller.component";
import {MenuListByDateComponent} from "./menus/menu-list-by-date/menu-list-by-date.component";
import {VoteListComponent} from "./votes/vote-list/vote-list.component";
import {VoteListByDateComponent} from "./votes/vote-list-by-date/vote-list-by-date.component";
import {VoteControllerComponent} from "./votes/vote-controller/vote-controller.component";
import {UserControllerComponent} from "./users/user-controller/user-controller.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {UserProfileComponent} from "./users/user-profile/user-profile.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent
  },
  {
    path: 'menu-controller',
    component: MenuControllerComponent
  },
  {
    path: 'menus',
    component: MenuListComponent
  },
  //https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular
  {
    path: 'menus/:date',
    component: MenuListByDateComponent
  },
  {
    path: 'menu-add',
    component: MenuAddComponent
  },
  {
    path: 'menu-edit',
    component: MenuEditComponent
  },
  {
    path: 'date-menus',
    component: DateMenuListComponent
  },
  {
    path: 'restaurant-add',
    component: RestaurantAddComponent
  },
  {
    path: 'restaurant-edit',
    component: RestaurantEditComponent
  },
  {
    path: 'dishes',
    component: DishListComponent
  },
  {
    path: 'dish-add',
    component: DishAddComponent
  },
  {
    path: 'dish-edit',
    component: DishEditComponent
  },
  {
    path: 'vote-controller',
    component: VoteControllerComponent
  },
  {
    path: 'votes',
    component: VoteListComponent
  },
  {
    path: 'user-controller',
    component: UserControllerComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-edit',
    component: UserEditComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'votes/:date',
    component: VoteListByDateComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },


];

export const AppRoutes = RouterModule.forRoot(routes);
