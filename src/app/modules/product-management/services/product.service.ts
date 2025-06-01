import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';
import { ICreateProduct, IProductDetails, IUpdateProduct } from '../../home/models/IProduct.interface';
import { IResponse } from '../../../core/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpService);
  
  create(createProduct: ICreateProduct): Observable<any> {
    return this.http.post('http://localhost:4000/products', createProduct);
  }

  getList(params: any): Observable<IResponse<IProductDetails[]>> {
    return this.http.getList<IProductDetails>('http://localhost:4000/products', params);
  }
  update(updateProduct: IUpdateProduct, param: any): Observable<any> {
    return this.http.update('http://localhost:4000/products', updateProduct, param);
  }

  delete(param: any): Observable<any> {
    return this.http.delete('http://localhost:4000/products', param);
  }
  details(params: IProductDetails): Observable<any> {
    return this.http.getWithParam('http://localhost:4000/products', params);
  }

}
