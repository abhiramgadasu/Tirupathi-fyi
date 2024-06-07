import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrl: './electrician.component.css'
})
export class ElectricianComponent {
  electricianForm!: FormGroup;
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
    this.electricianForm = this.fb.group({
      electricianName: ['', Validators.required],
      location: ['', Validators.required],
      phone: ['', Validators.required],
      specialization: ['', Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      workHours: ['', Validators.required],
      ownership: ['', Validators.required],
      availability: ['', Validators.required],
      specialRequests: ['']
    });
  }

  onSubmit() {
    if (this.electricianForm.valid) {
      // You can implement further actions here, such as sending the form data to a backend service
      console.log('Form submitted:', this.electricianForm.value);
    }
  }

  onCancel() {
    // You can implement cancel actions here, such as clearing the form fields
    this.electricianForm.reset();
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
