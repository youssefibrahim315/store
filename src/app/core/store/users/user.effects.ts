import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { UserActions } from './user.actions';
import { UserService } from '../../../modules/auth/services/user.service';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Keys } from '../../constances/keys.const';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  actions$ = inject(Actions);
  private readonly store = inject(Store);
  userService = inject(UserService);
  authService = inject(AuthService);
  private readonly storage = inject(StorageService);
  router = inject(Router);

  getUserDetailsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserDetails),
      exhaustMap((data) => {
        const email = data.email;
        return this.userService.profile({email}).pipe(
          map((data: any) => {
            return UserActions.getUserDetailsSuccess(data, email);
          }),
          catchError((error) => of(UserActions.getUserDetailsFailure(error)))
        );
      })
    )
  );

  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      exhaustMap(({ data }) =>
        this.authService.login(data).pipe(
          map((data) => {
            this.storage.setLocal(Keys.Token, data.token ?? 'zzzzzzzzzz');
            this.storage.setLocal(Keys.Email, data.email ?? 'admin@admin.com');

            this.router.navigateByUrl('/');
            return UserActions.loginSuccess(data);
          }),
          catchError((errors: string[]) => of(UserActions.loginFailure(errors)))
        )
      ),
      catchError((errors: string[]) => of(UserActions.loginFailure(errors)))
    )
  );
}
