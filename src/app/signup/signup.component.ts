import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor( public formBuilder:FormBuilder, public router:Router) {
   
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

  cities: Food[] = [
    {value: 'bangalore-0', viewValue: 'Bangalore'},
    {value: 'chennai-1', viewValue: 'Chennai'},
    {value: 'Delhi-2', viewValue: 'Delhi'}
  ];
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  
  get f() { return this.signUp_form.controls; }

  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signUp_form.invalid) {
            return;
        }

        // this.loading = true;
        this.router.navigate(['/register2']);
    }

}


