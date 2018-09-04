import { Component,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { Router, ActivatedRoute, Routes, ActivatedRouteSnapshot,RoutesRecognized,NavigationEnd,NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  routeData:any;
  @ViewChild(MatSidenav) drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    public title:Observable<string>;
  constructor(private breakpointObserver: BreakpointObserver, private _router:Router,public activatedRoute:ActivatedRoute, public pageTitle:Title) {
   
    // this.route.data.
    
    
    
    

    this.list = [
      {
        name:'final deals', 
        img: './assets/img/tabicon_hourglass.png', 
        url:['/finaldeals']
      },
      {
        name:'my account', 
        img: './assets/img/tabicon_avatar.png', 
        url:['/myaccount']
      },
      {
        name:'dh exclusive', 
        img: './assets/img/tabicon_favorites.png', 
        url:['/exclusive']
      },
      {
        name:'list your offer', 
        img: './assets/img/tabicon_contract.png', 
        url:['/listyouroffer']
      },
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
    this._router.events.subscribe( res => {
      this.drawer.close();
      console.log(res)
    });
    
  }


  // public ngOnInit() {
  //   // this._router.events

  //    this.routeData= this._router.events.subscribe((data) => {
  //      this.drawer.close();
  //      console.log(data)
  //      if (data instanceof NavigationStart) {
  //        console.log(data.url)
  //       let name = data.state.root.firstChild.children[0].data.title;   
  //       console.log(name)     
  //      }
  //    });
    
  // }


}
