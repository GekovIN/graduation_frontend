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
import { DishListComponent } from './dishes/dish-list/dish-list.component';
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuControllerComponent } from './menus/menu-controll/menu-controller.component';
import { MenuListByDateComponent } from './menus/menu-list-by-date/menu-list-by-date.component';
import { VoteControllerComponent } from './votes/vote-controller/vote-controller.component';
import { VoteListComponent } from './votes/vote-list/vote-list.component';
import { VoteListByDateComponent } from './votes/vote-list-by-date/vote-list-by-date.component';
import { RestaurantVoteComponent } from './restaurants/restaurant-vote/restaurant-vote.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserControllerComponent } from './users/user-controller/user-controller.component';
import { DishEditModalFormComponent } from './dishes/dish-edit-modal-form/dish-edit-modal-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DishAddModalFormComponent } from './dishes/dish-add-modal-form/dish-add-modal-form.component';
import { MenuAddModalFormComponent } from './menus/menu-add-modal-form/menu-add-modal-form.component';
import { MenuEditModalFormComponent } from './menus/menu-edit-modal-form/menu-edit-modal-form.component';
import { RestaurantEditModalFormComponent } from './restaurants/restaurant-edit-modal-form/restaurant-edit-modal-form.component';
import { RestaurantAddModalFormComponent } from './restaurants/restaurant-add-modal-form/restaurant-add-modal-form.component';
import { UserEditModalFormComponent } from './users/user-edit-modal-form/user-edit-modal-form.component';
import { ChangePasswordModalFormComponent } from './users/change-password-modal-form/change-password-modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RestaurantComponent,
    DateMenuListComponent,
    LoginComponent,
    HeaderComponent,
    RestaurantListComponent,
    DishListComponent,
    MenuListComponent,
    MenuControllerComponent,
    MenuListByDateComponent,
    VoteControllerComponent,
    VoteListComponent,
    VoteListByDateComponent,
    RestaurantVoteComponent,
    UserListComponent,
    UserProfileComponent,
    UserControllerComponent,
    DishEditModalFormComponent,
    DishAddModalFormComponent,
    MenuAddModalFormComponent,
    MenuEditModalFormComponent,
    RestaurantEditModalFormComponent,
    RestaurantAddModalFormComponent,
    UserEditModalFormComponent,
    ChangePasswordModalFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes,
    NgbModule
  ],
  entryComponents: [
    DishEditModalFormComponent,
    DishAddModalFormComponent,
    MenuAddModalFormComponent,
    MenuEditModalFormComponent,
    RestaurantEditModalFormComponent,
    RestaurantAddModalFormComponent,
    UserEditModalFormComponent,
    ChangePasswordModalFormComponent,
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
