import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUp_form:FormGroup;
  public Food:any;
  public Genders:any;
  loading = false;
  submitted = false;
  public payload:any = {root:{}};
  constructor( public formBuilder:FormBuilder, public router:Router, public user:UserService) {
   
   }

  ngOnInit() {
    this.signUp_form = this.formBuilder.group({
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
  
  get f() { return this.signUp_form.controls; }

  onSubmit() {
       this.submitted = true;
       this.loading = true;

        if (this.signUp_form.invalid) {
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
                    this.router.navigate(['/preferences1']);
                },
                error => {
                    this.loading = false;
                });
        
    }

}


