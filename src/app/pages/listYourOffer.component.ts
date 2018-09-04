import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-list-your-offer',
  templateUrl: './listYourOffer.component.html'
})
export class ListYourOfferComponent {

  lyoForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.lyoForm = this.formBuilder.group({
            brandName: ['', Validators.required],
            offerName: ['', Validators.required],
            offerValidity: ['', Validators.required],
            offerDescription: ['', Validators.required],
            offerTc: ['', Validators.required],
            contactName: ['', Validators.required],
            contactNumber: ['', Validators.required]
        });
  }

  get f() { return this.lyoForm.controls; }

  onSubmit() {
        this.submitted = true;
        // this.router.navigate(['/signup']);
        if (this.lyoForm.invalid) {
            return;
        }

        this.loading = true;
                       
        }
 
}

