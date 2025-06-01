import { Routes } from '@angular/router';
import { authGuard } from './core/guards';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { AuthComponent } from './modules/auth/auth.component';

export const routes: Routes = [
    {
        path:'',
        component:AdminLayoutComponent,
        canActivate:[authGuard],
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule ) 
    },
    {
        path:'auth',
        component:AuthComponent,
        loadChildren: () => import('./modules/auth/auth.module').then((c) => c.AuthModule ) 
        
    },
    { path: '**', redirectTo: '' }
];
