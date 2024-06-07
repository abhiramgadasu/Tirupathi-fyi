import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CompaniesService } from '../../services/companies.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrl: './deletecompany.component.css'
})
export class DeletecompanyComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private http: CompaniesService,private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<DeletecompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(data: any) {
    this.http.deleteCompany(data._id).subscribe(
      (res: any) => {
        console.log(res);

        this.dialogRef.close(true); // Close dialog and pass true to indicate success
      },
      (error: any) => {
        console.error(error);

        // Handle error appropriately
      }
    );
    this._snackBar.open('Deleted Sucessfully !!', 'dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
