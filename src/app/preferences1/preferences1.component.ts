import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-preferences1',
  templateUrl: './preferences1.component.html',
  styleUrls: ['./preferences1.component.css']
})
export class Preferences1Component implements OnInit {
  public categories: any;

  constructor(public http:HttpClient, public api: ApiService ) { 

    // this.api.getAll("categories?orderby_asc=title").subscribe(
    //   res=>{
    //     this.categories = res.data;
    //   }
    // )

  }

  ngOnInit() {
  }

}


