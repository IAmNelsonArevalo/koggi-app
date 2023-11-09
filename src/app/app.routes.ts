import { Routes } from '@angular/router';
/** Components */
import { UserListComponent } from './views/screens/user-list/user-list.component';
import { LoginComponent } from './views/screens/login/login.component';

export const routes: Routes = [
    {
        path: '', 
        component: UserListComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
