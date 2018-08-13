import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html'
})
export class BrandsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  goToDetailPage(){
    this.route.navigate(['brand-detail'])
  }

}
