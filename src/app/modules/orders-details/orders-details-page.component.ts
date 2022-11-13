import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncSubject, Subscription } from 'rxjs';
import { order, orderDetails } from '../orders/models/order.interface';
import { OrdersService } from '../orders/services/orders.service';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-orders-details-page',
  templateUrl: './orders-details-page.component.html',
  styleUrls: ['./orders-details-page.component.scss'],
})
export class OrdersDetailsPageComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  private dataSubject = new AsyncSubject<any>();
  order: order={
    OrderDate: '',
    UserId: '',
    Products: [],
    PaymentType: 'online'
  };
  id: number;
  orders!: order[];
  constructor(
    private OrdersService: OrdersService,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('orderId'));
  }
  ngOnInit(): void {
    this.getOrders();
    this.getOrderById(this.id);
    this.findOrderById(this.id);
  }
  getOrders(): order[] {
    this.subscriptions.add(
      this.OrdersService.getOrders().subscribe(
        (res) => {
          this.dataSubject.next(res);
          this.orders = res;
          this.dataSubject.complete();
        },
        (err) => { }
      )
    );
    return this.orders;
  }
  async findOrderById(id: number): Promise<any> {
    await this.dataSubject.forEach(async (item) => {
      this.order = await item.find((order: order) => order.OrderId === this.id);
    });
    return;
  }

  getOrderById(orderId: number) {
    this.subscriptions.add(
      this.OrdersService.getOrder(orderId).subscribe(
        (res) => {
          this.order = res;
        },
        (err) => { }
      )
    );
    return this.order;
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
