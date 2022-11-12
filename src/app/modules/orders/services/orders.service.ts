import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseURL, rout } from 'src/app/core/config/routes';
import { HttpService } from 'src/app/shared/services/http.service';
import { order } from '../models/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpService) { }
  getOrders(): Observable<order[]> {
    const url = baseURL + rout.Api.orders.List
    return this.http.createGetRequest(url).pipe(catchError(this.handleError))
  }
  getOrder(orderId: number) {
    const url = `${baseURL}${rout.Api.orders.List}/${orderId}`
    return this.http.createGetRequest(url).pipe(catchError(this.handleError))
  }

  addOrder(order: order) {
    const url = `${baseURL}${rout.Api.orders.Create}`
    return this.http.createPostRequest(url, order).pipe(catchError(this.handleError))
  }
  private handleError(errResponse: HttpErrorResponse) {
    return throwError(errResponse.error);
  }
}
