import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration3',
  templateUrl: './registration3.component.html',
  styleUrls: ['./registration3.component.css']
})
export class Registration3Component implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  gotoPref(){
    this.router.navigate(['/preferences1']);
  }
}
