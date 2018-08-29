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
  public subCategories: any;
  constructor(private route: ActivatedRoute, public http:HttpClient, public api: ApiService) {

    

   }

  ngOnInit() {
    this.route.params.subscribe(
      res=>{
        console.log(res)
        // this.api.getAll("subcategories?orderby_asc=title&associatedcategory.title=" + res.title).subscribe(
        //   res=>{
        //     this.subCategories = res.data;
        //     console.log("sub", res);
        //   }
        // )
      }
    )
  }

}
