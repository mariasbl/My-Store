import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public appState: AppStateService
  ) { }

  login(username, password) {

    let isAuth = false;

    if (username === "username" && password === "12345"){
      localStorage.setItem('currentUser', username);
      this.appState.setState(true);
      console.warn('Login com sucesso.');
      isAuth = true;
    }

    return isAuth;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.appState.setState(false);
    console.warn('Logout com sucesso.');
  }

}
