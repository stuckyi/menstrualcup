
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule } from 'ng2-pagination';


//root
import { AppRoutingModule, ROUTES_PROVIDERS} from './app-routing.module'; 
import { AppComponent } from './app.component';

//mongo
import { Parties } from '../../../both/collections/parties.collection';
import { PARTIES_DECLARATIONS } from './parties';

//interaction
import { ScrollComponent } from './interaction/scroll/scroll.component';
import { AccordionComponent } from './interaction/accordion/accordion.component';
import { GotoTopComponent } from './interaction/gototop/gototop.component';

//util
import { SocialComponent } from './util/social/social.component';


//app
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { PrincipleComponent } from './principle/principle.component';
import { UsageComponent } from './usage/usage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProsconsComponent } from './proscons/proscons.component';

//forum
import { ForumComponent } from './forum/forum.component';

//etc
import { Page404Component } from './page404.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccountsModule,
    Ng2PaginationModule
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
    GotoTopComponent,
    SocialComponent,
    ...PARTIES_DECLARATIONS,
    ForumComponent
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }