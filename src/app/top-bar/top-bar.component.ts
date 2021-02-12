import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { CartService } from '../_services/cart.service';
import { PurchaseService } from '../_services/purchase.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Input() isAuthenticated:boolean;
  items = this.cartService.getItems();
  loading = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService,
    private purchaseService: PurchaseService
  ) { 

  }

  getNelems() {
    return this.cartService.getNelems();
  }

  logout() {
    this.authService.logout();
    this.cartService.clearCart();
    this.purchaseService.clearPurchases();
    this.router.navigate(['/']);
  }

  toStore() {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 600);
    setTimeout(() => { this.router.navigate(['/']); }, 600);
  }

  toLogin() {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 600);
    setTimeout(() => { this.router.navigate(['/login']); }, 600);
  }

  toCart(): void {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 600);
    setTimeout(() => { this.router.navigate(['/cart']); }, 600);
  }

  toPurchases(): void {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 600);
    setTimeout(() => { this.router.navigate(['/purchases']); }, 600);
  }
  
  ngOnInit(): void {

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/