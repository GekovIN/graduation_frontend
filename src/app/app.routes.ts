import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {DateMenuListComponent} from "./menus/date-menu-list/date-menu-list.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantListComponent} from "./restaurants/restaurant-list/restaurant-list.component";
import {DishListComponent} from "./dishes/dish-list/dish-list.component";
import {MenuListComponent} from "./menus/menu-list/menu-list.component";
import {MenuControllerComponent} from "./menus/menu-controll/menu-controller.component";
import {MenuListByDateComponent} from "./menus/menu-list-by-date/menu-list-by-date.component";
import {VoteListComponent} from "./votes/vote-list/vote-list.component";
import {VoteListByDateComponent} from "./votes/vote-list-by-date/vote-list-by-date.component";
import {VoteControllerComponent} from "./votes/vote-controller/vote-controller.component";
import {UserControllerComponent} from "./users/user-controller/user-controller.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserProfileComponent} from "./users/user-profile/user-profile.component";
import {AppRoutesPaths} from "./app.routes.paths";

const routes: Routes = [
  {
    path: AppRoutesPaths.registerPath,
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: AppRoutesPaths.restaurantListPath,
    component: RestaurantListComponent
  },
  {
    path: AppRoutesPaths.menuControllerPath,
    component: MenuControllerComponent
  },
  {
    path: AppRoutesPaths.menuListPath,
    component: MenuListComponent
  },
  //https://stackoverflow.com/questions/44864303/send-data-through-routing-paths-in-angular
  {
    path: AppRoutesPaths.menuListPath + '/:date',
    component: MenuListByDateComponent
  },
  {
    path: AppRoutesPaths.dateMenuListPath,
    component: DateMenuListComponent
  },
  {
    path: AppRoutesPaths.dishListPath,
    component: DishListComponent
  },
  {
    path: AppRoutesPaths.voteControllerPath,
    component: VoteControllerComponent
  },
  {
    path: AppRoutesPaths.voteListPath,
    component: VoteListComponent
  },
  {
    path: AppRoutesPaths.userControllerPath,
    component: UserControllerComponent
  },
  {
    path: AppRoutesPaths.userListPath,
    component: UserListComponent
  },
  {
    path: AppRoutesPaths.profilePath,
    component: UserProfileComponent
  },
  {
    path: AppRoutesPaths.voteListByDatePath,
    component: VoteListByDateComponent
  },
  {
    path: AppRoutesPaths.loginPath,
    component: LoginComponent
  },

];

export const AppRoutes = RouterModule.forRoot(routes);
