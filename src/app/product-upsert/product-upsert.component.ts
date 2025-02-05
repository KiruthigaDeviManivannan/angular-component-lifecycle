import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-upsert',
  templateUrl: './product-upsert.component.html',
  styleUrl: './product-upsert.component.css'
})
export class ProductUpsertComponent {
  product: IProduct = {
    name: '',
    price: '',
    imgUrl: ''
  };

  @Output() productCreated = new EventEmitter<IProduct>();

  // The below is one of the ways to get the value of the input field using ViewChild
  // @ViewChild('productName', {static: true}) productName: ElementRef;
  // onSubmit() {
  //   console.log(this.productName.nativeElement.value);
  // }

  // The below is one of the ways to get the value of the input field using template reference variable
  // onSubmit(productName: HTMLInputElement) {
  //   console.log(productName.value);
  // }

  onSubmit() {
    console.log(this.product);
    this.productCreated.emit(this.product);

    this.product = {
      name: '',
      price: '',
      imgUrl: ''
    }
  }
}
