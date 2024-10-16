import { Component, inject, OnInit, signal } from '@angular/core';
import { IProudct, IProductResponse } from '../model/iproudct';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productServices = inject(ProductService);
  prod = signal<IProudct[]>([]);
  prodArr: IProudct[] = [];

  ngOnInit(): void {
    this.productServices.getAllProduct().subscribe((res: IProductResponse) => {
      console.log(res, 'Response from API');
      this.prodArr = res.products || [];
      this.prod.set(this.prodArr);
      console.log(this.prod(), 'Filtered products');
    });
  }
}
