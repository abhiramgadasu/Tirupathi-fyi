import { Component, Inject, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobpopup',
  templateUrl: './jobpopup.component.html',
  styleUrl: './jobpopup.component.css'
})
export class JobpopupComponent implements OnInit {
  jobForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<JobpopupComponent>,
    private http: JobsService) {
    this.jobForm = this.fb.group({
      companyName: ['', Validators.required],
      placeImage: ['', Validators.required],
      description: [''],
      role: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      experience: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      qualification: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      responsibilities: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      industryType: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      budget: ['', [Validators.min(0)]],
      hiringManager: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      openings: ['', [Validators.min(0)]],
      totalEmployees: ['', [Validators.min(0)]],
      expireDate: ['', Validators.required],
      jobType: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.jobForm.patchValue({
      companyName: this.data.companyName,
      placeImage: this.data.placeImage,
      description: this.data.description,
      role: this.data.role,
      location: this.data.location,
      experience: this.data.experience,
      qualification: this.data.qualification,
      responsibilities: this.data.responsibilities,
      industryType: this.data.industryType,
      budget: this.data.budget,
      hiringManager: this.data.hiringManager,
      openings: this.data.openings,
      totalEmployees: this.data.totalEmployees,
      expireDate: this.datePipe.transform(this.data.expireDate, 'yyyy-MM-dd'),
      jobType: this.data.jobType
    })
  }





  onSubmit() {
    console.log(this.jobForm.value);
    let payload = {
      ...this.jobForm.value,
      id: this.data._id
    }
    this.http.updateJob(this.data._id,payload).subscribe((res: any) => {
      console.log(res);
    })
    this.dialogRef.close()
    this._snackBar.open('Updated Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
