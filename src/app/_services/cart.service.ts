import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = JSON.parse(localStorage.getItem('cart'));

  public countCart = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product, color, size, quantity) {

    if (this.items === null) {
      this.items = [];
      this.items.push({product, color, size, quantity});
    } else 
      this.items.push({product, color, size, quantity});

    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getNelems () {
    if (this.items === null) return 0;
    return this.items.length;
  }

  getItems() {

    if (localStorage.getItem('cart') === null) return [];

    return this.items;
  }

  removeItem(item) {
    const index = this.items.findIndex( p => p.product.id === item.id);
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}