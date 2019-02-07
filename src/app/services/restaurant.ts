import {MenuDish} from "./menuDish";
import {Vote} from "./vote";

export class Restaurant {
  id: number;
  name: string;
  address: string;
  menuDishes: MenuDish[];
  votes: Vote[];
}
