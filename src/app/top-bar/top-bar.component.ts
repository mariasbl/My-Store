import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Input() isAuthenticated:boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
  
  ngOnInit(): void {

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/