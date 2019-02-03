import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
