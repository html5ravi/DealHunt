import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.component.html',
  styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {
   signIn_form: FormGroup;
   loading = false;
    submitted = false;
  constructor( public router:Router, private formBuilder: FormBuilder,private alertService:AlertService) { }

  ngOnInit() {
    this.signIn_form = this.formBuilder.group({
            otp: ['', Validators.required]
        });
  }

  get f() { return this.signIn_form.controls; }

  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signIn_form.invalid) {
            return;
        }

        // this.loading = true;
        this.router.navigate(['/register3']);
    }

  
}
