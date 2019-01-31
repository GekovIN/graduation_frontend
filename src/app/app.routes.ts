import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'restaurants',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
