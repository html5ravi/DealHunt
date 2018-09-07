import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferences1',
  templateUrl: './preferences1.component.html',
  styleUrls: ['./preferences1.component.css']
})
export class Preferences1Component implements OnInit {
  public categories: any;
  public status: boolean = false;
  public tempArr:any = [];
  constructor(public http:HttpClient, public api: ApiService, public router:Router ) { 

    this.api.getAll("categories?orderby_asc=title").subscribe(
      res=>{
        this.categories = res.data;
      }
    )

  }

  ngOnInit() {
  }

  addPplToGroup(obj){
    obj.active = !obj.active;
    //obj.selected = !obj.selected;
    if(obj.active){
      this.tempArr.push(obj);      
    }else{
      this.tempArr.splice(this.tempArr.findIndex(function(i){
          return i._id === obj._id;
      }), 1);      
    }
    console.log(this.tempArr)
  }

  
  gotoChooseSubCategory(){    
    if(this.tempArr.length > 0){
      let arr=[];
      this.tempArr.forEach(function(val,key){
        arr.push(val.title);
        // console.log(JSON.stringify(arr));
      })              
      localStorage.setItem("preferences",JSON.stringify(arr));
      this.router.navigate(['/preferences2']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }


}


