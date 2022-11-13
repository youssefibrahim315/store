import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseURL, rout } from 'src/app/core/config/routes';
import { HttpService } from 'src/app/shared/services/http.service';
import { user } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpService) { }
  getUsers(): Observable<user[]> {
    const url = baseURL + rout.Api.customers.List
    return this.http.createGetRequest(url).pipe(catchError(this.handleError))
  }
  private handleError(errResponse: HttpErrorResponse) {
    return throwError(errResponse.status);
  }
}
