import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Array<Product> = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

}
