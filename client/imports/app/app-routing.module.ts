import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { PrincipleComponent } from './principle/principle.component';
import { UsageComponent } from './usage/usage.component';
import { ProductComponent } from './product/product.component';
import { HistoryComponent } from './history/history.component';
import { ProsconsComponent } from './proscons/proscons.component';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

import { Page404Component } from './page404.component';


const routes: Routes = [
        { path: ' ', redirectTo: './home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'intro', component: IntroComponent },
        { path: 'principle', component: PrincipleComponent },
        { path: 'usage', component: UsageComponent },
        { path: 'product', component: ProductComponent },
        { path: 'history', component: HistoryComponent },
        { path: 'proscons', component: ProsconsComponent },
        { path: 'party', component: PartiesListComponent },
        { path: 'party/:partyId', 
                component: PartyDetailsComponent,
                canActivate: ['canActivateForLoggedIn']
        },
        { path: '**', component: Page404Component  }
];

 
export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];



@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [ RouterModule ]
})
export class AppRoutingModule { }