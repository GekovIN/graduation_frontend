import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantListComponent} from "./restaurants/restaurant-list/restaurant-list.component";
import {RestaurantAddComponent} from "./restaurants/restaurant-add/restaurant-add.component";
import {RestaurantEditComponent} from "./restaurants/restaurant-edit/restaurant-edit.component";
import {DishListComponent} from "./dishes/dish-list/dish-list.component";
import {DishAddComponent} from "./dishes/dish-add/dish-add.component";
import {DishEditComponent} from "./dishes/dish-edit/dish-edit.component";

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
    path: 'restaurants/menus',
    component: DashboardComponent
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
