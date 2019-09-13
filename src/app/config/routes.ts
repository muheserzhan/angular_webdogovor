import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page/page-not-found/page-not-found.component';
import { LoginComponent } from '../page/login/login.component';

const appRoutes: Routes = [
    {
        path: '/',
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export default appRoutes;