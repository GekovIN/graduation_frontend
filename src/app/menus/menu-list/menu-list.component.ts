import { Component, OnInit } from '@angular/core';
import {MenuDish} from "../../services/menuDish";
import {MenuService} from "../../services/menu.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuAddModalFormComponent} from "../menu-add-modal-form/menu-add-modal-form.component";
import {MenuEditModalFormComponent} from "../menu-edit-modal-form/menu-edit-modal-form.component";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: Array<MenuDish>;

  constructor(
    private service: MenuService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.service.loadAll().subscribe(
      menus => {this.menus = menus});
  }

  add() {
    const modalRef = this.modalService.open(MenuAddModalFormComponent);
    modalRef.result.then(created => {
      console.log('### Menu created: ' + JSON.stringify(created));
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }

  delete(menu: MenuDish) {
    this.service.delete(menu).subscribe(() => {
      this.menus = this.menus.filter(m => m !== menu);
    })
  }

  edit(id: number) {
    const modalRef = this.modalService.open(MenuEditModalFormComponent);
    modalRef.componentInstance.menuId = id;
    modalRef.result.then(() => {
      console.log('### Menu updated');
      this.ngOnInit();
    }).catch((error) => {
      console.log('### Error: ' + error);
    });
  }
}
