import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuard } from './product.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ ProductGuard ],
        component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  providers: [
    ProductGuard,
    ProductService
  ]
})
export class ProductModule { }
