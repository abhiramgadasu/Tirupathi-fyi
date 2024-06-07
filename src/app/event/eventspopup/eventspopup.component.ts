import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eventspopup',
  templateUrl: './eventspopup.component.html',
  styleUrl: './eventspopup.component.css'
})
export class EventspopupComponent implements OnInit {
  eventsForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<EventspopupComponent>,
    private http: EventService) {
    this.eventsForm = this.fb.group({
      about: ['', Validators.required],
      amount: [0, Validators.required],
      companyName: ['', Validators.required],
      content: ['', Validators.required],
      email: ['', Validators.required],
      end_date: ['', Validators.required],
      eventName: ['', Validators.required],
      faqs: ['', Validators.required],
      imageSlider: ['', Validators.required],
      isPaid: [false],
      language: ['', Validators.required],
      location: ['', Validators.required],
      start_date: ['', Validators.required],
      termsAndConditions: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.data);

    this.eventsForm.patchValue({
      about: this.data.about,
      amount: this.data.amount,
      companyName: this.data.companyName,
      content: this.data.content,
      email: this.data.email,
      end_date: this.datePipe.transform(this.data.end_date, 'yyyy-MM-dd'),
      eventName: this.data.eventName,
      faqs: this.data.faqs,
      imageSlider: this.data.imageSlider,
      isPaid: this.data.isPaid,
      language: this.data.language,
      location: this.data.location,
      start_date: this.datePipe.transform(this.data.start_date, 'yyyy-MM-dd'),
      termsAndConditions: this.data.termsAndConditions
    })
  }

  Postdata() {
    console.log(this.eventsForm.value);
    let payload = {
      ...this.eventsForm.value,
      id: this.data._id
    }
    this.http.updateEvent(payload).subscribe((res: any) => {
      console.log(res);
    })
    this.dialogRef.close()
    this._snackBar.open('Updated Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
