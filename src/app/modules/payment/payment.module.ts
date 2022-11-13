import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { OrderComponent } from './components/order/order.component';
import { OrderPageComponent } from './order-page.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
