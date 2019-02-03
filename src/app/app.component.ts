import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Restaurants vote system';
  email: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email');
  }

  logout() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('email', '');
    this.ngOnInit();
    this.router.navigate(['login']);
  }

}
