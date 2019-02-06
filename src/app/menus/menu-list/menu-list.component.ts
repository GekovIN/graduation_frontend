import { Component, OnInit } from '@angular/core';
import {MenuDish} from "../../services/menuDish";
import {MenuService} from "../../services/menu.service";
import {Router} from "@angular/router";
import {MenuAddComponent} from "../menu-add/menu-add.component";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  static componentPath = 'menus';
  menus: Array<MenuDish>;

  constructor(
    private service: MenuService,
    private router: Router) { }

  ngOnInit() {
    this.service.loadAll().subscribe(
      menus => {this.menus = menus});
  }

  add() {
    this.router.navigate([MenuAddComponent.componentPath]);
  }

  delete(menu: MenuDish) {
    this.service.delete(menu).subscribe(() => {
      this.menus = this.menus.filter(m => m !== menu);
    })
  }

  edit(menu: MenuDish) {
    localStorage.removeItem('editMenuId');
    localStorage.setItem('editMenuId', menu.id.toString());
    this.router.navigate(['menu-edit']);
  }
}
