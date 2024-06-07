import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.css'
})
export class TravelsComponent {
  // days: number[] = [];
  showevents: boolean = false
  travelForm!: FormGroup;
  days: { label: string, value: number }[] = [];
  months: { label: string, value: number }[] = [
    { label: 'January', value: 1 },
    { label: 'February', value: 2 },
    { label: 'March', value: 3 },
    { label: 'April', value: 4 },
    { label: 'May', value: 5 },
    { label: 'June', value: 6 },
    { label: 'July', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'October', value: 10 },
    { label: 'November', value: 11 },
    { label: 'December', value: 12 }
  ];
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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.travelForm = this.formBuilder.group({
      travelName: ['', Validators.required],
      fromLocation: ['', [Validators.required, Validators.maxLength(100)]],
      toLocation: ['', [Validators.required, Validators.maxLength(100)]],
      startTimings: ['', Validators.required],
      reachoutTimings: ['', Validators.required],
      seatsAvailable: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      price: ['', Validators.required],
      aboutTraveling: ['', Validators.required],
      policyInsurancesName: [''],
      policyInsurancesAmount: [''],
      conditions: ['']
    });
  }
  updateDays() {
    const month = this.travelForm.value.month;
    const year = new Date().getFullYear(); // Assuming current year
    const daysInMonth = new Date(year, month, 0).getDate();
    this.days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayName = new Date(year, month - 1, i).toLocaleString('en-us', { weekday: 'long' });
      this.days.push({ label: `${dayName}, ${i}`, value: i });
    }
  }

  onSubmit() {
    if (this.travelForm.valid) {
      const day = this.travelForm.value.day;
      const month = this.travelForm.value.month;
      console.log(`Selected date: ${day}, ${this.getMonthName(month)}`);
      console.log("Form values:", this.travelForm.value);
    } else {
      console.log("Form is invalid, please check the fields.");
    }
  }
  

  onCancel() {
    console.log("Form canceled");
  }

  getMonthName(month: number): string {
    return this.months.find(m => m.value === month)?.label || '';
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
