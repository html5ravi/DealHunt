import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

export interface Food {
  value: string;
  viewValue: string;
}
export interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-my-account',
  templateUrl: './myAccount.component.html'
})

export class MyAccountComponent implements OnInit {
  public tab = 1;
  public myAccount_form:FormGroup;
  public Genders:any;
  loading = false;
  submitted = false;

  constructor(public formBuilder:FormBuilder, public user:UserService) {
    this.user.getAll().pipe(first())
    .subscribe(
        res => {
            console.log(res)
        }
    )
   }

  ngOnInit() {
    this.myAccount_form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      marital_status: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
  });
}

cities: Food[] = [
    {value: 'Married', viewValue: 'Married'},
    {value: 'Single', viewValue: 'Single'}
  ];
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  
  get f() { return this.myAccount_form.controls; }

 

  

  setTab(num: number) {
    this.tab = num;
  }
  
  isSelected(num: number) {
    return this.tab === num;
  }


  onSubmit() {
       this.submitted = true;
       this.loading = true;

        if (this.myAccount_form.invalid) {
            return;
        }
  }

  




  
}

export interface City {
    value: string;
    viewValue: string;
  }
