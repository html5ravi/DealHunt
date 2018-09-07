import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-preferences2',
  templateUrl: './preferences2.component.html',
  styleUrls: ['./preferences2.component.css']
})
export class Preferences2Component implements OnInit {
  public subCategories: any =[];
  public getPreferences:any =[];
  // loading:boolean = true;
  constructor(private route: ActivatedRoute, public http:HttpClient, public api: ApiService) {
     this.getPreferences = JSON.parse(localStorage.getItem("preferences"));
      console.log(this.getPreferences);
      let tempArr = [];
      this.getPreferences.forEach(function(val,key){
        // console.log(val)
        // alert("a")
        
        api.getAll("subcategories?orderby_asc=title&associatedcategory.title=" + val).subscribe(
            res=>{
              console.log("asasdfub", res.data);
              res.data.forEach(v=>{
                tempArr.push({subtitle:v.subtitle,_id:v._id});
              });
              // this.loading = false;
            }
          );
      });
      console.log("temparr", tempArr);
      this.subCategories = tempArr;
   }

   

  ngOnInit() {
    
    // this.route.params.subscribe(
    //   res=>{
    //     console.log(res)
    //     this.api.getAll("subcategories?orderby_asc=title&associatedcategory.title=" + res.title).subscribe(
    //       res=>{
    //         this.subCategories = res.data;
    //         console.log("sub", res);
    //       }
    //     )
    //   }
    // )
  }
  getAllSubCategories(val){
      this.api.getAll("subcategories?orderby_asc=title&associatedcategory.title=" + val).subscribe(
            res=>{
              this.subCategories.push(res.data);
              console.log("sub", res);
            }
          );

      console.log("sub", this.subCategories);
   }
}
