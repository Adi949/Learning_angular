import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../api/products.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  providers: [ProductsService],
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  @Input() popupStatus: boolean = false;

  @Output() dataEvent = new EventEmitter<boolean>();

  constructor(private api: ProductsService) {}
  hide() {
    this.popupStatus = false;
    this.dataEvent.emit(this.popupStatus);
  }
  ngOnInit() {
    console.log('popup value is', this.popupStatus);
  }
}
