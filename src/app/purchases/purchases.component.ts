import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../_services/purchase.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  purchases = this.purchaseService.getPurchases();
  thumbnailImage = "assets/images/template.png";

  constructor(
    private purchaseService: PurchaseService
  ) { 
   
  }

  ngOnInit(): void {
  }

}
