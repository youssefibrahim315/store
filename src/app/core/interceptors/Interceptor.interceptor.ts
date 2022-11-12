import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../config/routes';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  baseURL = baseURL

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header: any = {};
    console.log(request);
    
    return next.handle(request);
  }
}



