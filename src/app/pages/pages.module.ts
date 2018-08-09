import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageRouting } from './page.routing';
import { CategoriesComponent } from './categories.component';
// import { HomeComponent } from '../home/home.component';
import { FinalDealsComponent } from './final-deals.component';
import { ExclusiveComponent } from './exclusive.component';
import { SettingsComponent } from './settings.component';
import { HelpdeskComponent } from './helpdesk.component';
@NgModule({
  imports: [
    CommonModule,
    pageRouting
  ],
  declarations: [
    CategoriesComponent,
    FinalDealsComponent,
    ExclusiveComponent,
    SettingsComponent,
    HelpdeskComponent
    ],
    exports:[
      CategoriesComponent,
    FinalDealsComponent,
    ExclusiveComponent,
    SettingsComponent,
    HelpdeskComponent
    ]
})
export class PagesModule { }
