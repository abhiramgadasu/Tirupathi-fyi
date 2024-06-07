import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlacesService } from '../../services/places.service';
import {
  MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletejob',
  templateUrl: './deletejob.component.html',
  styleUrl: './deletejob.component.css'
})
export class DeletejobComponent {


  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private placesService: PlacesService, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeletejobComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }



  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick(data: any) {
    this.dialogRef.close(true);
    this.placesService.deletePlace(data._id).subscribe((res: any) => {
      console.log(res);

    });
    this._snackBar.open('Deleted Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }// Pass true when user confirms deletion
}

