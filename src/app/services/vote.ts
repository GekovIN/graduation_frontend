import {Restaurant} from "./restaurant";
import {User} from "./user";

export class Vote {

  id: number;
  date: string;
  user: User;
  restaurant: Restaurant;
}
