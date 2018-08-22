import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-account',
  templateUrl: './myAccount.component.html'
})
export class MyAccountComponent implements OnInit {
  public tab = 1;
  constructor() {
    
   }

  ngOnInit() {
  }
  cities: City[] = [
    {value: 'bangalore-0', viewValue: 'Bangalore'},
    {value: 'chennai-1', viewValue: 'Chennai'},
    {value: 'Delhi-2', viewValue: 'Delhi'}
  ];

  

  setTab(num: number) {
    this.tab = num;
  }
  
  isSelected(num: number) {
    return this.tab === num;
  }
  
}

export interface City {
    value: string;
    viewValue: string;
  }
