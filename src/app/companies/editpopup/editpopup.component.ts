import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompaniesComponent } from '../companies.component';
import { CompaniesService } from '../../services/companies.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrl: './editpopup.component.css'
})
export class EditpopupComponent implements OnInit {
  companyForm!: FormGroup
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<EditpopupComponent>,
    private http: CompaniesService) {
    this.companyForm = this.fb.group({

      companyName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      companyLogo: [''],
      industry: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      companyDescription: ['', [Validators.minLength(10), Validators.maxLength(500)]],
      companyWebsite: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      companyEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      addressLine1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      addressLine2: ['', [Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      postalCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      facebook: ['', [Validators.maxLength(100)]],
      twitter: ['', [Validators.maxLength(100)]],
      linkedIn: ['', [Validators.maxLength(100)]],
      instagram: ['', [Validators.maxLength(100)]],
      otherSocialMedia: ['', [Validators.maxLength(100)]],
      companySize: ['', [Validators.maxLength(50)]],
      yearFounded: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      revenue: ['', [Validators.pattern(/^\d+$/)]],
      keyProductsServices: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      additionalNotes: ['', [Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.companyForm.patchValue({
      companyName: this.data.companyName,
      companyLogo: this.data.companyLogo,
      industry: this.data.industry,
      companyDescription: this.data.companyDescription,
      companyWebsite: this.data.companyWebsite,
      companyEmail: this.data.companyEmail,
      phoneNumber: this.data.phoneNumber,
      addressLine1: this.data.addressLine1,
      addressLine2: this.data.addressLine2,
      city: this.data.city,
      state: this.data.state,
      country: this.data.country,
      postalCode: this.data.postalCode,
      facebook: this.data.facebook,
      twitter: this.data.twitter,
      linkedIn: this.data.linkedIn,
      instagram: this.data.instagram,
      otherSocialMedia: this.data.otherSocialMedia,
      companySize: this.data.companySize,
      yearFounded: this.data.yearFounded,
      keyProductsServices: this.data.keyProductsServices,
      revenue: this.data.revenue,
      additionalNotes: this.data.additionalNotes
    })
  }

  Postdata() {
    console.log(this.companyForm.value);
    let payload = {
      ...this.companyForm.value,
      id: this.data._id // Change this line from this.data.id to this.data._id
    }
    this.http.updateCompany(this.data._id, payload).subscribe((res: any) => {
      console.log(res);
    })
    this.dialogRef.close()
    this._snackBar.open('Updated Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
}
