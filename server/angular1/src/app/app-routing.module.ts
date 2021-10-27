import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  // { path: '', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
