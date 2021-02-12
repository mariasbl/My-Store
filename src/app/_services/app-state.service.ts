import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  isAuthenticated;
  url;

  constructor() { }

  setState(state) {
    this.isAuthenticated = state;
  }

  setUrl(url) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }

}
