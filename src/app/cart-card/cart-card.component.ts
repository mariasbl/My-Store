import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {
  thumbnailImage = "assets/images/template.png";
  @Input() item;
  @Input() setItemSelected;
  @Input() open;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(item): void {
    this.setItemSelected(item);
    this.open();
  }

}
