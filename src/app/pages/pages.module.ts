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

@NgModule({
    imports: [
      CommonModule,
      pageRouting,
      DragScrollModule
    ],
    declarations: [
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent,
    BrandDetailsComponent
],
    exports:[
      CategoriesComponent,
      FinalDealsComponent,
      ExclusiveComponent,
      SettingsComponent,
      HelpdeskComponent,
      BrandsComponent
    ]
})
export class PagesModule { }
