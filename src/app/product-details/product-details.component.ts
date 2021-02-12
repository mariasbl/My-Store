import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product;
  title = "Product Details";
  thumbnailImage = "assets/images/template.png";
  count = 0;
  color = 0;
  size = 0;
  popup = false;
  loading = false;
  type = 'warning';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  close() {
    this.popup = false;
  }

  addToCart(product, color, size) {
    this.cartService.addToCart(product, color, size, this.count);

    this.loading = true;
    setTimeout(() => { this.loading = false }, 600);
    setTimeout(() => {  this.popup = true }, 600);
  }

  up() {
    this.count++;
  }

  down() {
    if (this.count > 0)
      this.count--;
  }

  selectColor(color) {
    this.color = color;
  }

  selectSize(size) {
    this.size = size;
  }

}