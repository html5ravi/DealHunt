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
import { NotificationComponent } from './notification.component';
import { AuthGuard } from '../_guards/auth.guard';

const appRoutes: Routes = [
        {
            path: '', 
            canActivate: [AuthGuard], 
            component:MainComponent,
            children:[
                {
                    path:'',
                    redirectTo:'dashboard',
                    pathMatch:'full'
                },
                {   path: 'dashboard', 
                    component:HomeComponent,        
                },
                {
                    path:'categories',
                    component:CategoriesComponent,
                    data:{title:'Categories'}
                },
                {
                    path:'finaldeals',
                    component:FinalDealsComponent,
                    data:{title:'Final Deals'}
                },
                {
                    path:'myaccount',
                    component:MyAccountComponent,
                    data:{title:'My Account'}
                },
                {
                    path:'exclusive',
                    component:ExclusiveComponent,
                    data:{title:'DH Exclusive'}
                },
                {
                    path:'listofoffers',
                    component:ListOfOffersComponent,
                    data:{title:'List Of Offers'}
                },
                {
                    path:'listyouroffer',
                    component:ListYourOfferComponent,
                    data:{title:'List Your Offer'}
                },
                {
                    path:'settings',
                    component:SettingsComponent,
                    data:{title:'Settings'}
                },
                {
                    path:'helpdesk',
                    component:HelpdeskComponent,
                    data:{title:'Helpdesk'}
                },
                {
                    path:'brands',
                    component:BrandsComponent,
                    data:{title:'Brands'}
                },
                {
                    path:'brand-detail',
                    component:BrandDetailsComponent,
                    data:{title:'Brand Deatils'}
                },
                {
                    path:'notification',
                    component:NotificationComponent,
                    data:{title:'Notification'}
                }
            ]}
];


export const pageRouting = RouterModule.forChild(appRoutes);