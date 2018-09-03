import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit {
  public brands: any;
  public loading:boolean =true;
  constructor(private route:Router, public http:HttpClient, public api: ApiService) { 
    this.api.getAll("brands?orderby_asc=name").subscribe(
      res=>{
        this.brands = res.data;
        console.log("Brands", res);
        this.loading = false;
      }
    )
  }

  ngOnInit() {
  }
  goToDetailPage(){
    this.route.navigate(['listofoffers'])
  }

}
