import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../_services/cart.service';
import { CaculatepricePipe } from '../_pipe/calculateprice.pipe';
import { CaculatetotalPipe } from '../_pipe/calculatetotal.pipe';
import { PurchaseService } from '../_services/purchase.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ CaculatepricePipe, CaculatetotalPipe ]
})
export class CheckoutComponent implements OnInit {
  isAuthenticated = localStorage.getItem('currentUser') !== null;
  shippingCosts = this.cartService.getShippingPrices();
  items = this.cartService.getItems();
  buyform = this.formBuilder.group({
    address: ['', Validators.required],
    postalcode: ['', Validators.required],
    phone: ['', Validators.required],
    shipping: ['', Validators.required]
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService
  ) { }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    
    this.purchaseService.addPurchase(this.items, 
      {address: this.buyform.value.address, 
        postalcode: this.buyform.value.postalcode,
        phone: this.buyform.value.phone,
        shipping: this.buyform.value.shipping,
        });

    this.buyform.reset();
    this.cartService.clearCart();
    console.log(localStorage.getItem('purchases'));
  }

}
