import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  isAuthenticated;

  constructor() { }

  setState(state) {
    this.isAuthenticated = state;
  }

}
