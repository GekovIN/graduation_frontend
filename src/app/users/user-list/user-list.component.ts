import { Component, OnInit } from '@angular/core';
import {User} from "../../services/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AppRoutesPaths} from "../../app.routes.paths";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor(
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit() {
    this.service.loadAll().subscribe(users => {
      console.log('### Loaded ' + users.length + ' users');
      this.users = users;
    })
  }

  delete(user: User) {
    this.service.delete(user.id).subscribe(() => {
      this.users = this.users.filter(u => u !== user);
    })
  }

  edit(user: User) {
    localStorage.removeItem('userEditEmail');
    localStorage.setItem('userEditEmail', user.email);
    this.router.navigate([AppRoutesPaths.userEditPath])
  }

  roles(index: number): string {
    if (this.users) {
      let user = this.users[index];
      let roles = user.roles;
      let rolesStr = '';
      roles.forEach(value => {
        rolesStr = rolesStr + value + "\n"
      });
      return rolesStr;
    }
  }
}
