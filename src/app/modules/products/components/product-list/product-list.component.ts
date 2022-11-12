import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();

  @Input() products: product[] = []
  productForm: FormGroup = new FormGroup({});
  cart: product[] = [];
  constructor(private ProductsService: ProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  editProductQuantity(event: any, product: product) {

    this.prepareDataBeforePost(event.target.value, product)

    if (this.productForm.invalid) {
      return
    }
    let body = { ...this.productForm.value }

    this.subscriptions.add(
      this.ProductsService.editProductQuantity(body.ProductId, body.AvailablePieces).subscribe(
        (res) => {
          console.log("success");
        },
        (err) => {
          console.log("error");
        })
    )

  }
  prepareDataBeforePost(quantity: number, product: product) {
    this.productForm.patchValue({
      ProductId: quantity,
      AvailablePieces: product.AvailablePieces
    })

  }

  cartProduct(product: product) {
    let isExist = this.cart.find(item => item.ProductId == product.ProductId)
    if (isExist) {
      let index = this.cart.indexOf(product);
      this.cart.splice(index, 1)
      this.ProductsService.cart.next(this.cart)
    } else {
      this.cart.push(product);
      this.ProductsService.cart.next(this.cart);
    }

    console.log(this.cart);

  }

  inCart(product: product): boolean {
    let isExist = this.cart.find(item => item.ProductId == product.ProductId)
    return isExist ? true : false;
  }
  initForm() {
    this.productForm = this.fb.group({
      ProductId: [''],
      AvailablePieces: ['']
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
