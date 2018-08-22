import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

// declare var $: any;
// declare var jQuery: any;
@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html'
})
export class ExclusiveComponent implements OnInit {
  public dhexclusive: any;
  constructor(private route:Router, public http:HttpClient, public api: ApiService) { 
    this.api.getAll("brands?orderby_asc=name").subscribe(
      res=>{
        this.dhexclusive = res.data;
        console.log("dhExclusive", res);
      }
    )
  }

  ngOnInit() {
   
  }
  goToStore(){
    
  }
}
