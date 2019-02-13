import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../services/restaurant";
import {Dish} from "../../services/dish";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MenuService} from "../../services/menu.service";
import {RestaurantService} from "../../services/restaurant.service";
import {DishService} from "../../services/dish.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuDish} from "../../services/menuDish";

@Component({
  selector: 'app-menu-edit-modal-form',
  templateUrl: './menu-edit-modal-form.component.html',
  styleUrls: ['./menu-edit-modal-form.component.css']
})
export class MenuEditModalFormComponent implements OnInit {

  @Input() menuId: number;

  editForm: FormGroup;

  restaurants: Restaurant[];
  dishes: Dish[];

  menu: MenuDish;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.editForm.controls; }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      id: [],
      date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      restaurantId: ['', [Validators.required]],
      dishId: ['', [Validators.required]]
    });

    this.menuService.getById(this.menuId).subscribe(menu => {
      this.menu = menu;
      this.f.id.setValue(menu.id);
      this.f.date.setValue(menu.date);
      this.f.restaurantId.setValue(menu.restaurant.id);
      this.f.dishId.setValue(menu.dish.id);
    });

    this.restaurantService.loadAll().subscribe(restaurants => {
      this.restaurants = restaurants;
    });

    this.dishService.loadAll().subscribe(dishes => {
      this.dishes = dishes;
    });

  }

  onSubmit() {

    this.submitted = true;

    let id = this.f.id.value;
    let date = this.f.date.value;
    let restaurantId = this.f.restaurantId.value;
    let dishId = this.f.dishId.value;

    this.menuService.update({id, date, restaurantId, dishId}).subscribe(() => {
      this.activeModal.close({id, date, restaurantId, dishId})
    })
  }

}
