import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home';
import { CategoriesComponent } from './categories.component';
import { FinalDealsComponent } from './final-deals.component';
import { BrandsComponent } from './brands.component';
import { ExclusiveComponent } from './exclusive.component';
import { HelpdeskComponent } from './helpdesk.component';
import { SettingsComponent } from './settings.component';
import { BrandDetailsComponent } from './brandDetails.component';
import { MyAccountComponent } from './myAccount.component';
import { ListYourOfferComponent } from './listYourOffer.component';
import { ListOfOffersComponent } from './listOfOffers.component';

const appRoutes: Routes = [
        {
            path: '', 
            // canActivate: [AuthGuard], 
            component:MainComponent,
            children:[
                // {
                //     path:'',
                //     redirectTo:'home',
                //     pathMatch:'full'
                // },
                {   path: '', 
                    component:HomeComponent,        
                },
                {
                    path:'categories',
                    component:CategoriesComponent
                },
                {
                    path:'finaldeals',
                    component:FinalDealsComponent
                },
                {
                    path:'myaccount',
                    component:MyAccountComponent
                },
                {
                    path:'exclusive',
                    component:ExclusiveComponent
                },
                {
                    path:'listofoffers',
                    component:ListOfOffersComponent
                },
                {
                    path:'listyouroffer',
                    component:ListYourOfferComponent
                },
                {
                    path:'settings',
                    component:SettingsComponent
                },
                {
                    path:'helpdesk',
                    component:HelpdeskComponent
                },
                {
                    path:'brands',
                    component:BrandsComponent
                },
                {
                    path:'brand-detail',
                    component:BrandDetailsComponent
                }
            ]}
];


export const pageRouting = RouterModule.forRoot(appRoutes);