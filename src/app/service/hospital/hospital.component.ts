import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitalForm!: FormGroup;
  showevents: boolean = false
  additionalDoctors !: FormArray;
  additionalFacilities!: FormArray;
  formErrorMessages: { [key: string]: string } = {};
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
    this.hospitalForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      about: ['', [Validators.minLength(10), Validators.maxLength(200)]],
      timings: [''],
      establishedDate: ['', Validators.required],
      phoneNumber: ['', Validators.pattern('[0-9]*')],
      hospitalImage: ['', Validators.required],
      hospitalImageSlider: ['', Validators.required],
      doctorName: ['', Validators.required],
      specialization: ['', Validators.required],
      doctorImage: ['', Validators.required],
      facilitiesName: ['', Validators.required],
      facilitiesImage: ['', Validators.required],
      additionalDoctors: this.fb.array([]),
      additionalFacilities: this.fb.array([])
    });

    this.additionalDoctors = this.hospitalForm.get('additionalDoctors') as FormArray;
    this.additionalFacilities = this.hospitalForm.get('additionalFacilities') as FormArray;
  }
  createHospital() {
    if (this.hospitalForm.valid) {
      console.log('Hospital Form Data:', this.hospitalForm.value);
      // Logic to create hospital

      // Clear form after successful submission
      this.hospitalForm.reset();
    } else {
      this.validateForm();
    }
  }

  validateForm() {
    Object.keys(this.hospitalForm.controls).forEach(field => {
      const control = this.hospitalForm.get(field);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subField => {
          const subControl = control.get(subField);
          this.setErrorMessage(field + '.' + subField, subControl);
        });
      } else {
        this.setErrorMessage(field, control);
      }
    });
  }

  setErrorMessage(fieldName: string, control: any) {
    if (control && control.errors) {
      this.formErrorMessages[fieldName] = Object.keys(control.errors).map(key => key + ' ' + control.errors[key]).join(', ');
    }
  }


  addAdditionalDoctor() {
    this.additionalDoctors.push(this.createDoctor());
  }

  createDoctor(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      specialization: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  cancelAdditionalDoctor(index: number) {
    this.additionalDoctors.removeAt(index);
  }

  addAdditionalFacility() {
    this.additionalFacilities.push(this.createFacility());
  }

  createFacility(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  cancelAdditionalFacility(index: number) {
    this.additionalFacilities.removeAt(index);
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