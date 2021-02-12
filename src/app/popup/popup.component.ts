import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() show;
  @Input() type;
  @Output() closeEvent = new EventEmitter();
  @Output() removeItem = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }

  remove() {
    this.removeItem.emit();
  }
}