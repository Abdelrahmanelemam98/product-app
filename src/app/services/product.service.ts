import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProductResponse, IProudct } from '../model/iproudct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';
  private baseUrl2 = 'https://dummyjson.com/products/category';
  http = inject(HttpClient);
  constructor() {}

  getAllProduct() {
    return this.http.get<IProductResponse>(this.baseUrl);
  }

  getProductById(id: number) {
    return this.http.get<IProudct>(`${this.baseUrl}/${id}`);
  }

  getProductByCategory(category: any) {
    return this.http.get<IProductResponse>(`${this.baseUrl2}/${category}`);
  }

  //   fetch('https://dummyjson.com/products/category/smartphones')
  // .then(res => res.json())
  // .then(console.log);
}
