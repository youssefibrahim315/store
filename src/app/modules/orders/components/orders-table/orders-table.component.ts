import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/modules/products/models/product.interface';
import { order, orderDetails } from '../../models/order.interface';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  @Input() orders: order[] = [];
  @Input() products: product[] = [];

  header: string[] = ["UserId", "OrderId", "Products", "total price", "PaymentType"]
  constructor() { }

  ngOnInit(): void {
  }

  totalOrderPrice(orderDetails: orderDetails[]) {
    let productsOrder = this.getProductOrderDetails(orderDetails);
    productsOrder = this.prepareDataBeforeSum(productsOrder);
    let Order: number[] = this.prepareOrderAndQuantity(productsOrder)
    let sumOrder = Order.reduce((previousValue, currentValue) => previousValue + currentValue, 0
    )
    return sumOrder
  }
  getProductOrderDetails(orderDetails: orderDetails[]) {
    return orderDetails.map((item: orderDetails) => {
      let product = this.products.find(product => product.ProductId == item.ProductId)
      let Quantity = item.Quantity;
      if (product) {
        return { ...product, Quantity }
      } else {
        return
      }
    });
  }
  prepareDataBeforeSum(productsOrder: any) {
    return productsOrder.filter((item: any) => item.ProductName.length > 0 && item !== undefined)
  }
  prepareOrderAndQuantity(productsOrder: any) {
    return productsOrder.map((item: any) => { return item?.Quantity! * item?.ProductPrice! })
  }
  getProductName(ProductId: number): string {
    let product = this.products.find(product => product.ProductId == ProductId)
    return product?.ProductName || ''
  }
}
