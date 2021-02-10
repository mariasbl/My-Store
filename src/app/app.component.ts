import { Component } from '@angular/core';
import { AppStateService } from './_services/app-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appState: AppStateService) {
    appState.isAuthenticated = localStorage.getItem('currentUser') !== null;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/