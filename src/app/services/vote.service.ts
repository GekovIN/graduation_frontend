import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vote} from "./vote";

const apiUrl: string = 'http://localhost:8080/graduation/votes/';

@Injectable({
  providedIn: 'root'
})

export class VoteService {

  constructor(private http: HttpClient) {}

  loadAll() {
    return this.http.get<Array<Vote>>(apiUrl);
  }
}
