import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[] = [
    {id: 1, name: 'Real Madrid', country: 'Spain'},
    {id: 2, name: 'team2', country: 'Italy'},
    {id: 3, name: 'team3', country: 'Germany'},
    {id: 4, name: 'team4', country: 'England'},
    {id: 5, name: 'team5', country: 'Sweden'}
  ]

  constructor() {

  }
}
