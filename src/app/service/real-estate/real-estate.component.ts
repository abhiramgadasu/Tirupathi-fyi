import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.css'
})
export class RealEstateComponent {
  realEstateForm!: FormGroup;
  showevents: boolean = false
  displayedColumns: string[] = [
    'companyName',
    'eventName',
    'language',
    'location',
    'Actions'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.realEstateForm = this.fb.group({
      propertyName: ['', Validators.required],
      location: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      propertyType: ['', Validators.required],
      price: ['', Validators.required],
      area: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      description: [''],
      amenities: [''],
      availability: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.realEstateForm.valid) {
      // You can implement further actions here, such as sending the form data to a backend service
      console.log('Form submitted:', this.realEstateForm.value);
    }
  }

  onCancel() {
    // You can implement cancel actions here, such as clearing the form fields
    this.realEstateForm.reset();
  }
  addEvents() {
    this.showevents = !this.showevents
  }
  editdata(data: any) {
    // let dialog = this.dialog.open(EventspopupComponent, {
    //   height: '90vh',
    //   width: '90vw',
    //   data: data
    // });
  }
  deleteEvent(data: any) {
    // let dialog = this.dialog.open(EventdeleteComponent, {
    //   width: '300px',
    //   data:data
     
    // });
  }
}
