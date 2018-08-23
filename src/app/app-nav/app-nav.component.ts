import { Component,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent {
  public icon = 'close'; 
  list:any;
  selected :any;
  menuStack:any;

  @ViewChild(MatSidenav) drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private _router:Router) {

    this.list = [
      'FINAL DEALS',
      'MY ACCOUNT',
      'DH EXCLUSIVE',
      'LIST YOUR OFFER'
   ];
   

  }
  select(item) {
    if(item === this.selected){
      this.selected = null;
    }else{
      this.selected = item;
    }
  };

  ngOnInit() {
    this._router.events.subscribe(() => {
      this.drawer.close();
    });
  }
}
