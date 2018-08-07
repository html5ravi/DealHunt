import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }
  gotoRegister(){
      this.router.navigate(['/register3']);
  }
}
