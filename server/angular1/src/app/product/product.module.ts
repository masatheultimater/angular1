import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent},
      { path: ':productId', component: ProductDetailComponent}
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
