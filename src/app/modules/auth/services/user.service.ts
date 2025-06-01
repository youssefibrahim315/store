import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login(data: any) : Observable<any> {
    return this.http.getWithParam('', data);
  }
  http = inject(HttpService);
  profile(params: any): Observable<any> {
    return this.http.getWithParam('http://localhost:4000/users', params);
  }
}
