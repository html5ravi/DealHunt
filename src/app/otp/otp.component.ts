import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
   signIn_form: FormGroup;
   loading = false;
   submitted = false;
   public session_id:any;
   public mobile:any;
   public errMsg:string;
  constructor( public router:Router, private formBuilder: FormBuilder,private alertService:AlertService, public authenticationService:AuthenticationService, public user:UserService) {
      this.session_id = JSON.parse(localStorage.getItem("session_id"));
      this.mobile = JSON.parse(localStorage.getItem("mobile"));
      
   }

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

        this.validateOTP(this.mobile,this.session_id,this.f.otp.value);
        

        this.loading = true;
        // this.router.navigate(['/register3']);
    }


    
    validateOTP(mobile,session_id,otp){
        
            this.authenticationService.validateOTP(mobile,session_id,otp)
            .pipe(first())
            .subscribe(
                res => {
                    console.log(res.status.success)
                    if(!res.status.success){
                        console.log(res)
                        this.errMsg = res.status.message;
                        
                        this.loading = false;
                    }
                    if(res.status.code==200){
                        localStorage.setItem("token",JSON.stringify(res.auth.token));
                        this.checkUser();
                        this.loading = true;
                    }
                        
                },
                error => {
                    console.log(error.status)
                    this.loading = false;
                });
    }

    checkUser(){
        this.user.getAll().pipe(first())
        .subscribe(
            res => {
                if(res.status.code==500){
                    this.router.navigate(['/register3']);
                }
                if(res.status.code==200){
                    this.router.navigate(['/']);
                }
                // console.log(res)
            }
        )
    }

  
}
