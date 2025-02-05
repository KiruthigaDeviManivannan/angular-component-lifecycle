import { Component } from '@angular/core';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productList: IProduct[] = [
    { name: 'Galaxy A16', price: '15,000', imgUrl: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a165fzkimea/gallery/levant-galaxy-a16-sm-a165-sm-a165fzkimea-thumb-544188140?$492_492_PNG$'
    },
    { name: 'Galaxy A26', price: '10,000', imgUrl: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a356elvvmea/gallery/levant-galaxy-a35-5g-sm-a356-sm-a356elvvmea-thumb-540234585?$492_492_PNG$'
    },
    { name: 'Galaxy A36', price: '12,000', imgUrl: 'https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a556elbwmea/gallery/levant-galaxy-a55-5g-sm-a556-sm-a556elbwmea-thumb-540234798?$492_492_PNG$'
    }
  ];

  onProductCreated(product: IProduct) {
    this.productList.push(product);
  }
}
