import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { products } from '../products';
import { AppStateService } from '../_services/app-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  title = "Products"
  loading = false;

  constructor(
    private appStateService: AppStateService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.appStateService.setUrl('/');
  }

  selectProduct(product) {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 800);
    setTimeout(() => { this.router.navigate(['/products/' + product]) }, 800);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/