import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

@NgModule({
    declarations: [
      NavbarComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HomePageComponent,
      OrdersPageComponent,
      AppComponent
    ],
    providers: [
      provideHttpClient()
    ],
    exports: [
      NavbarComponent
    ]

})
export class AppModule { }
