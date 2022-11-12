import { Component, OnInit } from '@angular/core';
import { product } from './models/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products: product[] = []

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.ProductsService.getProducts().subscribe((res) => {
      this.products = res.sort();
    }, (err) => {
    })
  }
}
