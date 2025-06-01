import { Injectable, inject } from '@angular/core';
import { HttpService } from '../../../core/services/http.service';
import { StorageService } from '../../../core/services/storage.service';
import { Keys } from '../../../core/constances/keys.const';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpService);
  private readonly storage = inject(StorageService);

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:4000/users', data);
  }

  get isLoggedIn(): boolean {
    return !!this.storage.getLocal(Keys.Token) ;
  }
}
