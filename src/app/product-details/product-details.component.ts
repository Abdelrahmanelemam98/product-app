import { Component, inject, OnInit, signal } from '@angular/core';
import { IProudct } from '../model/iproudct';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetials = signal<IProudct>({});
  productServices = inject(ProductService);
  routeActivted = inject(ActivatedRoute);
  product!: IProudct;
  productId!: any;
  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.routeActivted.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.productId = params.get('id');

        if (this.productId) {
          this.productServices
            .getProductById(this.productId)
            .subscribe((data) => {
              this.productDetials.set(data);
              console.log(this.productDetials());
            });
        }
      }
    });
  }
}
