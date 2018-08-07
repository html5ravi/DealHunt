import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {
   signIn_form: FormGroup;
  constructor( public router:Router, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.signIn_form = this.formBuilder.group({
            otp: ['', Validators.required]
        });
  }
  gotoRegister(){
      this.router.navigate(['/register3']);
  }
}
