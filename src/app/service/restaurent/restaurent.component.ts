import { Component, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrl: './restaurent.component.css'
})
export class RestaurentComponent {
  restaurantForm: FormGroup;
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
  constructor(private formBuilder: FormBuilder) {
    this.restaurantForm = this.formBuilder.group({
      restaurant_name: ['', Validators.required],
      location: ['', Validators.required],
      phone_number: ['', Validators.required],
      email: [''],
      website: [''],
      opening_hours: ['', Validators.required],
      cuisine_type: ['', Validators.required],
      price_range: ['', Validators.required],
      rating: [''],
      features: [''],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.restaurantForm.valid) {
      console.log(this.restaurantForm.value);
      // You can call a service to save the form data to the server
    } else {
      console.error("Form is invalid");
      // You can display an error message or handle invalid form submission in some way
    }
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
