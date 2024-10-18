import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProductResponse, IProudct } from '../model/iproudct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';
  http = inject(HttpClient);
  constructor() {}

  getAllProduct() {
    return this.http.get<IProductResponse>(this.baseUrl);
  }

  getProductById(id: number) {
    return this.http.get<IProudct>(`${this.baseUrl}/${id}`);
  }
}
