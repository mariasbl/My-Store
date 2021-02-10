import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {
  @Input() product; 
  thumbnailImage = "assets/images/template.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
