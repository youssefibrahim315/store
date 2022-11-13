import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rout } from './core/config/routes';

const routes: Routes = [
  { path: rout.webSite.home, loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule) },
  { path: rout.webSite.orders, loadChildren: () => import('./modules/orders/orders.module').then((m) => m.OrdersModule) },
  { path: rout.webSite.ordersDetails, loadChildren: () => import('./modules/orders-details/orders-details.module').then((m) => m.OrdersDetailsModule) },
  { path: rout.webSite.order, loadChildren: () => import('./modules/payment/payment.module').then((m) => m.PaymentModule) },
  { path: '', redirectTo: rout.webSite.home, pathMatch: 'full' },
  { path: '**', redirectTo: rout.webSite.home, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
