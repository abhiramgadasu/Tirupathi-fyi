import { Component, Inject } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobdelete',
  templateUrl: './jobdelete.component.html',
  styleUrl: './jobdelete.component.css'
})
export class JobdeleteComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private jobService:JobsService,private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<JobdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }



  onNoClick(){
    this.dialogRef.close();
  }

  onYesClick(data: any) {
    this.dialogRef.close(true); 
    this.jobService.deleteJob(data._id).subscribe((res: any) => {
      console.log(res);

    });
    this._snackBar.open('Deleted Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }// Pass true when user confirms deletion
  }

