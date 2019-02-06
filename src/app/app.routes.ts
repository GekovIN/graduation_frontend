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
    path: 'menus',
    component: MenuListComponent
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
    path: 'login',
    component: LoginComponent
  },

];

export const AppRoutes = RouterModule.forRoot(routes);
