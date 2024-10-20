import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategories } from '../model/icategories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'https://dummyjson.com/products/categories';

  http = inject(HttpClient);

  getAllCategories() {
    return this.http.get<ICategories[]>(this.baseUrl);
  }
}
