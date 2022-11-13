import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsPageComponent } from './orders-details-page.component';

const routes: Routes = [{path:'',component:OrdersDetailsPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersDetailsRoutingModule { }
