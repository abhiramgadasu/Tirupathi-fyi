import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../services/places.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PlacepopupComponent } from './placepopup/placepopup.component';
import { MatDialog } from '@angular/material/dialog';
import { DeletejobComponent } from './deletejob/deletejob.component';

@Component({
  selector: 'app-places',
  templateUrl: './placess.component.html',
  styleUrls: ['./placess.component.css']
})
export class PlacessComponent implements OnInit {
  placeForm!: FormGroup;
  isEditMode: boolean = false;
  placeId: string | null = null;
  showevents: boolean = false


  displayedColumns: string[] = [
    'Place Name',
    'Location',
    'Peak Season',
    'Moderate Season',
    'Off Season',
    'Actions'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private fb: FormBuilder,
    private placesService: PlacesService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.createForm()
    this.placesService.isrefrshrequired.subscribe(() => {
      this.getplace()
    })
  }

  ngOnInit(): void {
    this.getplace()
  }
  createForm() {
    this.placeForm = this.fb.group({
      placeName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      placeImage: ['', Validators.required],
      imageSlider: ['', Validators.required],
      about: [''],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      peakSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      moderateSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]], // Corrected field name
      offSeason: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }
  onSubmit(): void {
    if (this.placeForm.valid) {
      const placedata = this.placeForm.value;
      this.placesService.createPlace(placedata).subscribe({
        next: (res: any) => {
          this.showevents = false;
          this.placeForm.reset();
          // Additional logic after successful place creation, if necessary
        },
        error: (err) => {
          console.error('Create place failed', err);
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

  onCancel(): void {
    this.showevents = false
  }

  addplace() {
    this.showevents = !this.showevents
  }
  getplace() {
    this.placesService.getPlaces().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource.data = res.response

        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }


  editdata(data: any) {
    let dialog =this.dialog.open(PlacepopupComponent, {
       height: '90vh',
       width: '90vw',
       data:data
     });
  }
  deleteEvent(data: any) {
    

    const dialogRef = this.dialog.open(DeletejobComponent, {
      width: '300px',
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed deletion
        // Perform deletion logic here
      } else {
        // User canceled deletion
      }
    });



  }


}
