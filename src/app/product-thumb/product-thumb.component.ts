import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {
  @Input() product; 
  @Output() selectProductEvent = new EventEmitter<string>();

  thumbnailImage = "assets/images/template.png";
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product) {
    this.selectProductEvent.emit(product);
  }

}
