import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersDetailsRoutingModule } from './orders-details-routing.module';
import { OrdersDetailsPageComponent } from './orders-details-page.component';
import { CartListComponent } from './components/cart-list/cart-list.component';


@NgModule({
  declarations: [
    OrdersDetailsPageComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    OrdersDetailsRoutingModule
  ]
})
export class OrdersDetailsModule { }
