import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { JobpopupComponent } from './jobpopup/jobpopup.component';
import { JobdeleteComponent } from './jobdelete/jobdelete.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobForm!: FormGroup;
  isDropdownOpen = false;
  isEdit = false;
  jobId: string | null = null;
  showevents: boolean = false
  displayedColumns: string[] = [
    'CompanyName',
    'Role',
    'Location',
    'Qualification',
    'Experience',
    'Hiring Manager',
    'Actions'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private fb: FormBuilder,
    private jobService: JobsService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.createForm()
    this.jobService.isrefrshrequired.subscribe(() => {
      this.getjob()
    })
  }

  ngOnInit(): void {
    this.getjob()
  }


  createForm() {
    this.jobForm = this.fb.group({
      companyName: ['', Validators.required],
      placeImage: ['', Validators.required],
      description: [''],
      role: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      experience: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
      qualification: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      responsibilities: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      industryType: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      budget: [0, Validators.required],
      hiringManager: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      openings: ['', [Validators.min(0)]],
      totalEmployees: ['', [Validators.min(0)]],
      expireDate: ['', Validators.required],
      jobType: ['', Validators.required],
      // id: { value: '', disabled: true },
    });
  }
  onSubmit() {
    const formData = this.jobForm.value;
    this.jobService.createJob(formData).subscribe(
      () => {
        this.showevents = false
        this.jobForm.reset()
        console.log('Job created successfully');

      },
      (error) => {
        console.error('Error creating job:', error);
      }
    );
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  getjob() {
    this.jobService.getJobs().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource.data = res.response

        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }



  addjob() {
    this.showevents = !this.showevents
  }

  editdata(data: any) {
    let dialog = this.dialog.open(JobpopupComponent, {
      height: '90vh',
      width: '90vw',
      data: data
    });
  }
  deleteEvent(data: any) {
    let dialog = this.dialog.open(JobdeleteComponent, {
      width: '300px',
      data: data

    });
  }
}
