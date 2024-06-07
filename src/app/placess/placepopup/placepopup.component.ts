// import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlacesService } from '../../services/places.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-placepopup',
  templateUrl: './placepopup.component.html',
  styleUrl: './placepopup.component.css'
})
export class PlacepopupComponent implements OnInit {

  placeForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private datePipe: DatePipe,
    public dialogRef: MatDialogRef<PlacepopupComponent>,
    private http:PlacesService) {
      this.placeForm = this.fb.group({
        placeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        placeImage: ['', Validators.required],
        imageSlider: ['', Validators.required],
        about: [''],
        location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        peakSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        moderateSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        offSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
      });
   
}
 ngOnInit(): void {
  this.placeForm.patchValue({
    placeName: this.data.placeName,
    placeImage: this.data.placeImage,
    imageSlider: this.data.imageSlider,
    about: this.data.about,
    location: this.data.location,
    peakSeason: this.data.peakSeason,
    moderateSeason: this.data.moderateSeason,
    offSeason: this.data.offSeason,
  
  })
 }

 

Postdata() {
  console.log(this.placeForm.value);
  let payload = {
    ...this.placeForm.value,
    id: this.data._id
  }
  this.http.updatePlace(this.data._id, payload).subscribe((res: any) => {
    console.log(res);
  })
  this.dialogRef.close()
  this._snackBar.open('Updated Sucessfully !!', 'dismiss', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

}
