import {
  Component,
  effect,
  inject,
  OnInit,
  output,
  Signal,
  signal,
} from '@angular/core';
import { IProudct, IProductResponse } from '../model/iproudct';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

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
  router = inject(Router);
  outputEv = signal<string>('ali');
  ngOnInit(): void {
    this.productServices.getAllProduct().subscribe((res: IProductResponse) => {
      console.log(res, 'Response from API');
      this.prodArr = res.products || [];
      this.prod.set(this.prodArr);
      console.log(this.prod(), 'Filtered products');
    });
    // this.outputEv/
    // subscribe((res) => {
    //   console.log('res from output', res);
    // });
    setTimeout(() => {
      console.log('should recive');
    }, 5000);
  }

  constructor() {
    effect(() => {
      console.log('log signal', this.outputEv());
      // this.outputEv.set()
    });
  }
  showDetails(prodId: number | undefined) {
    if (prodId) {
      this.router.navigate(['product/', prodId]);
    } else {
      console.error('Prodcut Id is undefined');
    }
  }
}
