import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchases = JSON.parse(localStorage.getItem('purchases'));

  constructor() { }

  addPurchase(items, data) {
    
    if (this.purchases === null) {
      this.purchases = [];
      this.purchases.push({items, data});
    } else 
      this.purchases.push({items, data});
    
    localStorage.setItem('purchases', JSON.stringify(this.purchases));
  }

  getPurchases() {

    if (localStorage.getItem('purchases') === null) return [];

    return this.purchases;

  }

  clearPurchases() {
    this.purchases = [];
    localStorage.removeItem('purchases');
  }

}
