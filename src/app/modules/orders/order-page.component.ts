import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { product } from '../products/models/product.interface';
import { ProductsService } from '../products/services/products.service';
import { order } from './models/order.interface';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();

  orders: order[] = [];
  products: product[] = [];
  constructor(private OrdersService: OrdersService, private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getOrderData();
    this.getProductData()
  }

  getOrderData(): void {
    this.subscriptions.add(

      this.OrdersService.getOrders().subscribe((res) => {
        this.orders = res.sort();
      }, (err) => {
      })
    )
  }
  getProductData(): void {
    this.subscriptions.add(
      this.ProductsService.getProducts().subscribe((res) => {
        this.products = res.sort();
      }, (err) => {
      }))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
