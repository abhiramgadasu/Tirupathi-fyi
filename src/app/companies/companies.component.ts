import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompaniesService } from '../services/companies.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletecompanyComponent } from './deletecompany/deletecompany.component';
import { EditpopupComponent } from './editpopup/editpopup.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit {
  companyForm!: FormGroup;
  showevents: boolean = false
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'companyName',
    'phoneNumber',
    'industry',
    'companySize',
    'city',
    'Actions'
  ];
  constructor(private formBuilder: FormBuilder,private http:CompaniesService, private dialog: MatDialog) {
    this.createForm();
    this.http.isrefrshrequired.subscribe(() => {
      this.getcompany()
    })
   }

  ngOnInit(): void {
   this.getcompany()
  }


  createForm() {
    this.companyForm = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      companyLogo: [''],
      industry: ['', [Validators.minLength(2), Validators.maxLength(100)]],
      companyDescription: ['', [Validators.minLength(10), Validators.maxLength(500)]],
      companyWebsite: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      companyEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      addressLine1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      addressLine2: ['', [Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      postalCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      facebook: ['', [Validators.maxLength(100)]],
      twitter: ['', [Validators.maxLength(100)]],
      linkedIn: ['', [Validators.maxLength(100)]],
      instagram: ['', [Validators.maxLength(100)]],
      otherSocialMedia: ['', [Validators.maxLength(100)]],
      companySize: ['', [Validators.maxLength(50)]],
      yearFounded: ['', [Validators.required]],
      revenue: ['', [Validators.pattern(/^\d+$/)]],
      keyProductsServices: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      additionalNotes: ['', [Validators.maxLength(500)]]
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      const placedata = this.companyForm.value;
     
      this.http.createCompany(placedata).subscribe({
        next: (res: any) => {
          this.showevents = false;
          this.companyForm.reset();
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
  getcompany() {
    this.http.getAllCompanies().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource.data = res.response
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }






  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  addEvents() {
    this.showevents = !this.showevents
  }

  editdata(data: any) {
    let dialog = this.dialog.open(EditpopupComponent, {
      height: '90vh',
      width: '90vw',
      data: data
    });
  }
  deleteEvent(data: any) {
    let dialog = this.dialog.open(DeletecompanyComponent, {
      width: '300px',
      data:data

    });
  }
}
