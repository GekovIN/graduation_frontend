import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutes} from "./app.routes";
import {UserService} from "./services/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RestaurantComponent } from './restaurants/restaurant-menu/restaurant.component';
import { DateMenuListComponent } from './menus/date-menu-list/date-menu-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { DishListComponent } from './dishes/dish-list/dish-list.component';
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { DishAddComponent } from './dishes/dish-add/dish-add.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';
import { MenuAddComponent } from './menus/menu-add/menu-add.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';
import { MenuControllerComponent } from './menus/menu-controll/menu-controller.component';
import { MenuListByDateComponent } from './menus/menu-list-by-date/menu-list-by-date.component';
import { VoteControllerComponent } from './votes/vote-controller/vote-controller.component';
import { VoteListComponent } from './votes/vote-list/vote-list.component';
import { VoteListByDateComponent } from './votes/vote-list-by-date/vote-list-by-date.component';
import { RestaurantVoteComponent } from './restaurants/restaurant-vote/restaurant-vote.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserControllerComponent } from './users/user-controller/user-controller.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RestaurantComponent,
    DateMenuListComponent,
    LoginComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    DishListComponent,
    DishAddComponent,
    DishEditComponent,
    MenuAddComponent,
    MenuListComponent,
    MenuEditComponent,
    MenuControllerComponent,
    MenuListByDateComponent,
    VoteControllerComponent,
    VoteListComponent,
    VoteListByDateComponent,
    RestaurantVoteComponent,
    UserListComponent,
    UserProfileComponent,
    UserEditComponent,
    UserControllerComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes
  ],
  providers: [UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
