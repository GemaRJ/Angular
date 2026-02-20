import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Add } from './components/add/add';
import { List } from './components/list/list';
import { Buscar } from './components/buscar/buscar';

export const routes: Routes = [
   { path:"home",component:Home},{ path:"add",component:Add},{ path:"list",component:List},{ path:"buscar",component:Buscar},{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];
