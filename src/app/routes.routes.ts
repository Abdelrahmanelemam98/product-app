import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'category', component: CategoryListComponent },
];
