import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutes} from "./app.routes";
import {UserService} from "./services/user.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurants/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { DishListComponent } from './dishes/dish-list/dish-list.component';
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import { DishAddComponent } from './dishes/dish-add/dish-add.component';
import { DishEditComponent } from './dishes/dish-edit/dish-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RestaurantComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    RestaurantListComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    DishListComponent,
    DishAddComponent,
    DishEditComponent
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
