import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUp_form:FormGroup;
  public Food:any;
  constructor( public formBuilder:FormBuilder) {
   
   }

  ngOnInit() {
    this.signUp_form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
  });
  }

  foods: Food[] = [
    {value: 'bangalore-0', viewValue: 'Bangalore'},
    {value: 'chennai-1', viewValue: 'Chennai'},
    {value: 'Delhi-2', viewValue: 'Delhi'}
  ];
}
export interface Food {
  value: string;
  viewValue: string;
}

