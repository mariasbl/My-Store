import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../_services/cart.service';
import { CaculatepricePipe } from '../_pipe/calculateprice.pipe';
import { CaculatetotalPipe } from '../_pipe/calculatetotal.pipe';


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
    phone: ['', Validators.required]
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.items);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
  }

}
