import { Component, inject, OnInit, signal } from '@angular/core';
import { IProudct, IProductResponse } from '../model/iproudct';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productServices = inject(ProductService);
  prod = signal<IProudct[]>([]); // Signal for product list with type IProudct[]
  prodArr: IProudct[] = []; // All products array
  router = inject(Router);
  categorySelected: string = ''; // Store selected category name

  ngOnInit(): void {
    // Fetch all products on initialization
    this.productServices.getAllProduct().subscribe((res: IProductResponse) => {
      console.log(res, 'Response from API');
      this.prodArr = res.products || []; // Assign the products array to prodArr
      this.prod.set(this.prodArr); // Set all products in the signal initially
      console.log(this.prod(), 'All products loaded');
    });

    // Listen for category selection events
    window.addEventListener('categorySelected', (event: any) => {
      this.categorySelected = event.detail.name;
      console.log('Category selected:', this.categorySelected);

      // Reload products based on selected category
      this.loadProductCategory(this.categorySelected);
    });
  }

  constructor() {}

  // Navigate to product details page
  showDetails(prodId: number | undefined) {
    if (prodId) {
      this.router.navigate(['product/', prodId]);
    } else {
      console.error('Product Id is undefined');
    }
  }

  // Load products by selected category
  loadProductCategory(category: string) {
    if (category && category !== 'All') {
      this.productServices
        .getProductByCategory(category)
        .subscribe((data: IProductResponse) => {
          // Filter products by category and assign to prod signal
          const filteredProducts = data.products || [];
          this.prod.set(filteredProducts);
          console.log(this.prod(), 'Filtered products');
        });
    } else {
      // If no category is selected or 'All' is selected, show all products
      this.prod.set(this.prodArr);
    }
  }
}
