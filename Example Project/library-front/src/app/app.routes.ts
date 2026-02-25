import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path:"", redirectTo:"/login", pathMatch:"full"},
    {path:"login", component:Login},
    {path:"register", component:Registration},
    {path:"home", component:Home}
];
