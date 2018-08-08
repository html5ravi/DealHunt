import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageRouting } from './page.routing';
import { CategoriesComponent } from './categories.component';
import { HomeComponent } from '../home/home.component';
@NgModule({
  imports: [
    CommonModule,
    pageRouting
  ],
  declarations: [CategoriesComponent, HomeComponent]
})
export class PagesModule { }
