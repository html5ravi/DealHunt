import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageRouting } from './page.routing';
import { CategoriesComponent } from './categories.component';
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
@NgModule({
    imports: [
      CommonModule,
      pageRouting,
      DragScrollModule,
      MatTabsModule,
      MatInputModule,
      MatDatepickerModule,
      MatRadioModule,
      MatSelectModule
    ],
    declarations: [
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent,
      BrandDetailsComponent,
      ListOfOffersComponent,
      MyAccountComponent
],
    exports:[
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent,
      ListOfOffersComponent,
      MyAccountComponent
    ]
})
export class PagesModule { }
