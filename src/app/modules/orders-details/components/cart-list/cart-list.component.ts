import { Component, Input, OnInit } from '@angular/core';
import { order, orderDetails } from 'src/app/modules/orders/models/order.interface';
import { product } from 'src/app/modules/products/models/product.interface';
import { ProductsService } from 'src/app/modules/products/services/products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() order: order={
    OrderDate: '',
    UserId: '',
    Products: [],
    PaymentType: 'online'
  };
  products!: product[];
  constructor(public ProductsService: ProductsService) { }

  ngOnInit(): void {
  }
  cartProduct(product: product) {
    let isExist = this.ProductsService.cart.value.find(item => item.ProductId == product.ProductId)
    if (isExist) {
      let index = this.ProductsService.cart.value.indexOf(product);
      this.ProductsService.cart.value.splice(index, 1)
    } else {
      this.ProductsService.cart.value.push(product);
    }
  }

  inCart(product: product): boolean {
    let isExist = this.ProductsService.cart.value.find(item => item.ProductId == product.ProductId)
    return isExist ? true : false;
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
  getUserName(UserId: string) { }
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
