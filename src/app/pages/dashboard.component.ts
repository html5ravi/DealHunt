import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public banners: any;
  constructor(public http:HttpClient, public api: ApiService) { 
    this.api.getAll("advertisements?orderby_dsc=score&").subscribe(
      res=>{
        this.banners = res.data;
        console.log("Banners",res)
      }
    )

  }

  ngOnInit() {
  }
  goToStore(){}
}
