import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../product';
import { ProductService} from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id)
      .subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error
      );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
