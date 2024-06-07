import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../../services/event.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

// Adjust the path as necessary

@Component({
  selector: 'app-eventdelete',
  templateUrl: './eventdelete.component.html',
  styleUrls: ['./eventdelete.component.css'] // Note the correct 'styleUrls' key
})
export class EventdeleteComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private eventService: EventService,private _snackBar: MatSnackBar,
    private toastr: ToastrService, // Corrected service name
    public dialogRef: MatDialogRef<EventdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data: any) {
    this.eventService.deleteEvent(data._id).subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('everything is broken', 'Major Error', {
          timeOut: 3000,
        });
        this.dialogRef.close(true); // Close dialog and pass true to indicate success
      },
      (error: any) => {
        console.error(error);
        this.toastr.error('Failed to delete event', 'Error');
        // Handle error appropriately
      }
    );
    this._snackBar.open('Deleted Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
