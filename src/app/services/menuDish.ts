import {Dish} from "./dish";
import {Restaurant} from "./restaurant";

export class MenuDish {
  id: number;
  date: string;
  dish: Dish;
  restaurant: Restaurant;
}
