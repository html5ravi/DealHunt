import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';
import {ApiService} from '../_services/api.service';
import * as moment from 'moment';

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
  public userDetail = [];
  loading = false;
  submitted = false;
  public payload:any = {root:{}};

  constructor(public formBuilder:FormBuilder, public user:UserService,public apiService: ApiService) {
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
  this.getUserDetail();
  // this.addUserDetail();
}

cities: Food[] = [
    {value: 'Married', viewValue: 'Married'},
    {value: 'Single', viewValue: 'Single'}
  ];
  genders: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
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
     this.payload.root.customer = [{
           "mobile": this.f.mobile.value,
           "email": this.f.email.value,
           "firstname": this.f.firstname.value,
           "lastname": this.f.lastname.value,
           "extended_fields":{
             field:[
               {
                 "name":"gender",
                 "value":this.f.gender.value
               },
               {
                 "name":"dob",
                 "value":this.f.dob.value
               },
               {
                 "name":"marital_status",
                 "value":this.f.marital_status.value
               }
             ]
           }
       }];
       console.log(this.payload)
       this.user.register(this.payload)
       .pipe(first())
         .subscribe(
          res => {
              console.log(res)
              this.loading = false;
              //this.router.navigate(['/preferences1']);
              alert('profile updated successfully');
          },
          error => {
              this.loading = false;
          });
  }


  
getUserDetail(){
  this.apiService.getCustomerDetail().subscribe(res =>{
    let  userDetail= res.customers.customer[0];
    console.log(this.userDetail,'user respoknse');
    this.addUserDetail(userDetail)    
  })
}

addUserDetail(userDetail){
  this.myAccount_form.patchValue({
    firstname:userDetail['firstname']
  })
  this.myAccount_form.patchValue({
    lastname: userDetail['lastname']
  })
  this.myAccount_form.patchValue({
    email:userDetail['email']
  })
  this.myAccount_form.patchValue({
    mobile:userDetail['mobile']
  })
  this.myAccount_form.patchValue({
    marital_status:userDetail['extended_fields'].field.find(field=> field.name == 'marital_status').value || ''
  })

  console.log(moment(userDetail['extended_fields'].field.find(field=>field.name == 'dob').value,'YYYY-MM-DD').format('MM/DD/YYYY'),"moment date---")
  this.myAccount_form.patchValue({
    dob:(userDetail['extended_fields'].field.find(field=>field.name == 'dob').value)?moment(userDetail['extended_fields'].field.find(field=>field.name == 'dob').value,'YYYY-MM-DD').format('MM/DD/YYYY'):''
  })
  this.myAccount_form.patchValue({
    gender:userDetail['extended_fields'].field.find(field=>field.name == 'gender').value || ''
   })
}
}

export interface City {
    value: string;
    viewValue: string;
  }
