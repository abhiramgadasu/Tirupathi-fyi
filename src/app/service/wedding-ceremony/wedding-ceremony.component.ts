import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wedding-ceremony',
  templateUrl: './wedding-ceremony.component.html',
  styleUrl: './wedding-ceremony.component.css'
})
export class WeddingCeremonyComponent {

  weddingCeremonyForm!: FormGroup;
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
    this.weddingCeremonyForm = this.fb.group({
      name: ['', Validators.required],
      serviceType: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      location: ['', Validators.required],
      ratings: [''],
      images: ['']
    });
  }

  onSubmit() {
    if (this.weddingCeremonyForm.valid) {
      // You can implement further actions here, such as sending the form data to a backend service
      console.log('Form submitted:', this.weddingCeremonyForm.value);
    }
  }

  onCancel() {
    // You can implement cancel actions here, such as clearing the form fields
    this.weddingCeremonyForm.reset();
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
