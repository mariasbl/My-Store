import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../_services/app-state.service';

import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  itemSelected;
  loading = false;
  popup = false;
  type = "confirm";
  
  constructor(
    private cartService: CartService,
    private router: Router,
    private appStateService: AppStateService
  ) {}

  ngOnInit() {
    this.appStateService.setUrl('/cart');
  }

  setItemSelected(item): void {
    this.itemSelected = item;
  }

  removeItem(): void {
    this.cartService.removeItem(this.itemSelected);
  }

  checkRouter() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loading = true;
      setTimeout(()=>{this.loading = false}, 800);
      setTimeout(()=>{this.router.navigate(['/checkout'])}, 800);
      
    } else {
      this.loading = true;
      setTimeout(()=>{this.loading = false}, 800);
      setTimeout(()=>{this.router.navigate(['/login'])}, 800);
    }
  }

  open() {
    this.popup = true;
  }

  close() {
    this.popup = false;
  }

  

}