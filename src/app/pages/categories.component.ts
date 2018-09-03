import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  public categories: any;
  public loading:boolean =true;
  constructor(public http:HttpClient, public api: ApiService,public pageTitle:Title) {
    this.pageTitle.setTitle("Categories");
    this.api.getAll("categories?orderby_asc=title").subscribe(
      res=>{
        this.categories = res.data;
        this.loading = false;
      }
    )

   }

  ngOnInit() {
  }

}
