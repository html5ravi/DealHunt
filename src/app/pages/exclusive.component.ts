import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';
import { Title } from '@angular/platform-browser';

// declare var $: any;
// declare var jQuery: any;
@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html'
})
export class ExclusiveComponent implements OnInit {
  public dhexclusive: any;
  public loading:boolean=true;
  constructor(private route:Router, public http:HttpClient, public api: ApiService, public pageTitle:Title) { 
    this.pageTitle.setTitle("DH Exclusive");
    this.api.getAll("brands?orderby_asc=name").subscribe(
      res=>{
        this.dhexclusive = res.data;
        this.loading = false;
        console.log("dhExclusive", res);
      },
      err=>{},
    )
  }

  ngOnInit() {
   
  }
  goToDetailPage(){
    this.route.navigate(['listofoffers'])
  }
}
