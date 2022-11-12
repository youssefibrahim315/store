import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderPageComponent } from './order-page.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';


@NgModule({
  declarations: [
    OrderPageComponent,
    OrdersTableComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
