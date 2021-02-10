import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [{
    product:{
      id: 1,
      name: 'T-shirt XL',
      price: 799,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    color: 1,
    size: 1,
    quantity: 1
  }];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product, color, size, quantity) {
    this.items.push({product, color, size, quantity});
  }

  getItems() {
    return this.items;
  }

  removeItem(item) {
    const index = this.items.findIndex( p => p.product.id === item.id);
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}