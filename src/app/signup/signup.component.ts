import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUp_form:FormGroup;
  public formBuilder:FormBuilder;
  constructor() {
   
   }

  ngOnInit() {
    this.signUp_form = this.formBuilder.group({
      username: ['', Validators.required],
      password:['',Validators.required],
      email: ['', Validators.required]
  });
  }

}


