import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//root
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

import { INTERACTION_DECLARATIONS } from './interaction';
import { UTIL_DECLARATIONS } from './util';


//app
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { PrincipleComponent } from './principle/principle.component';
import { UsageComponent } from './usage/usage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProsconsComponent } from './proscons/proscons.component';

//ui
import { UI_DECLARATIONS } from './ui';


import { ScrollDirective } from './interaction/scroll/scroll.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    ...UI_DECLARATIONS,
    ...UTIL_DECLARATIONS,
    ...INTERACTION_DECLARATIONS,
    ScrollDirective
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }