import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import { RouterModule } from '@angular/router';


import {AppComponent} from './app.component';
import {PageDacceuilComponent} from './page-dacceuil/page-dacceuil.component';
import {MenuComponent} from './menu/menu.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavBarreComponent} from './nav-barre/nav-barre.component';
import { HttpClientModule } from '@angular/common/http';




  // #enddocregion wildcard

@NgModule({
  imports: [
    BrowserModule, FormsModule,AppRoutes,RouterModule,HttpClientModule
  ],
  declarations: [
    AppComponent, PageDacceuilComponent, MenuComponent,PageNotFoundComponent,NavBarreComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}