import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
//import { RouterModule } from '@angular/router';

import {PageDacceuilComponent} from './page-dacceuil/page-dacceuil.component';
import {MenuComponent} from './menu/menu.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavBarreComponent} from './nav-barre/nav-barre.component';


 export const routes: Routes = [
    {path: 'pagedacceuil', component: PageDacceuilComponent},
    {path: '/da', component: MenuComponent},
    {path: 'pagenotfound', component: PageNotFoundComponent},
    {path: 'home', component: NavBarreComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot( routes)],
    exports:[RouterModule]  // <-- debugging purposes only)
   
  })

  export class AppRoutes {
}
