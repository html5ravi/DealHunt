import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageRouting } from './page.routing';
import { CategoriesComponent } from './categories.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { HomeComponent } from '../home/home.component';
import { FinalDealsComponent } from './final-deals.component';
import { ExclusiveComponent } from './exclusive.component';
import { SettingsComponent } from './settings.component';
import { HelpdeskComponent } from './helpdesk.component';
import { BrandsComponent } from './brands.component';
import { BrandDetailsComponent } from './brandDetails.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ListOfOffersComponent } from './listOfOffers.component';
import { MyAccountComponent } from './myAccount.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ListYourOfferComponent } from './listYourOffer.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { Tab3Component } from './tab3.component';
import { TabComponent } from './tab.component';
import { TabContentComponent } from './tab.content.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AgmCoreModule } from '@agm/core';
import { NotificationComponent } from './notification.component';

@NgModule({
    imports: [
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB88AxxukgdxByLTjHCbH10pB7y7Goh5e8'
      }),
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      pageRouting,
      DragScrollModule,
      MatTabsModule,
      MatInputModule,
      MatDatepickerModule,
      MatRadioModule,
      MatSelectModule,
      MatFormFieldModule
    ],
    declarations: [
      DashboardComponent,
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent,
      BrandDetailsComponent,
      ListOfOffersComponent,
      MyAccountComponent,
      ListYourOfferComponent,
      Tab3Component,
      TabComponent,
      TabContentComponent,
      NotificationComponent
],
    exports:[
      DashboardComponent,
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent,
      ListOfOffersComponent,
      MyAccountComponent,
      ListYourOfferComponent,
      Tab3Component,
      TabComponent,
      TabContentComponent
    ]
})
export class PagesModule { }
