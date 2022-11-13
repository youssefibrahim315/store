import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { baseURL, rout } from 'src/app/core/config/routes';
import { HttpService } from 'src/app/shared/services/http.service';
import { product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cart :BehaviorSubject<product[]> = new BehaviorSubject([{
    ProductId: 0,
    ProductName: '',
    ProductPrice: 0,
    AvailablePieces: 0,
    ProductImg: ''
  }])
  constructor(private http: HttpService) {
    this.removeDefaultData()
  }
  getProducts(): Observable<product[]> {
    const url = baseURL + rout.Api.products.List
    return this.http.createGetRequest(url).pipe(catchError(this.handleError))
  }
  editProductQuantity(productId: number, quantity: number) {
    const url = `${baseURL}${rout.Api.products.Update}/${productId}`
    return this.http.createPatchRequest(url, quantity).pipe(catchError(this.handleError))
  }
  removeDefaultData() {
    let isExist = this.cart.value.find(item => item.ProductId == 0)
    if (isExist) {
      console.log(isExist);
      console.log(this.cart);
      let index = this.cart.value.indexOf(isExist);
      this.cart.value.splice(index, 1)
      console.log(this.cart);
    }
  }
  private handleError(errResponse: HttpErrorResponse) {
    return throwError(errResponse.error);
  }
}
