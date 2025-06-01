import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {  provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { AppEffects, AppStore } from './core/store/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(AppStore),
    provideEffects(...AppEffects),
    provideHttpClient(),
    provideRouter(routes),provideStore(),
    provideEffects()]
};
