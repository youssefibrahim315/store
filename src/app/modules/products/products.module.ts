import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule
  ]
})
export class ProductsModule { }
