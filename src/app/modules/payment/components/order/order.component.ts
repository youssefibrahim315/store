import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { order } from 'src/app/modules/orders/models/order.interface';
import { product } from 'src/app/modules/products/models/product.interface';
import { ProductsService } from 'src/app/modules/products/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  // rout = rout;
  products: product[] = this.ProductsService.cart.value
  orderForm: FormGroup = new FormGroup({});
  cart: product[] = this.ProductsService.cart.value;
  constructor(private ProductsService: ProductsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  editProductQuantity(event: any, product: product) {

    this.prepareDataBeforePost(event.target.value, product)

    if (this.orderForm.invalid) {
      return
    }
    let body = { ...this.orderForm.value }

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
    this.orderForm.patchValue({
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
    this.orderForm = this.fb.group({
      ProductId: [''],
      OrderDate: [''],
      UserId: [''],
      Products: [''],
      Quantity: [''],
      PaymentType: "Cash"
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
