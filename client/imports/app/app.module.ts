import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module'; 
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


import { ScrollComponent } from './interaction/scroll/scroll.component';
import { AccordionComponent } from './interaction/accordion/accordion.component';
import { GotoTopComponent } from './interaction/gototop/gototop.component';

import { IntroComponent } from './intro/intro.component';
import { PrincipleComponent } from './principle/principle.component';
import { UsageComponent } from './usage/usage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProsconsComponent } from './proscons/proscons.component';

import { Page404Component } from './page404.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    PrincipleComponent,
    UsageComponent,
    ProductComponent,
    HistoryComponent,
    ProsconsComponent,
    Page404Component,
    ScrollComponent,
    AccordionComponent,
    GotoTopComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }