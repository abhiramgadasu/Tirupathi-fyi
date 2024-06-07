import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EventspopupComponent } from './eventspopup/eventspopup.component';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventForm!: FormGroup;
  isEdit = false;
  showevents: boolean = false
  eventId: string | null = null;

  isLanguageDropdownOpen = false;
  selectedContentUrl: string | undefined;
  selectedImageSliderUrl: string | undefined;

  myDataArray: any[] = [];
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

  constructor(private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.createForm();
    this.eventService.isrefrshrequired.subscribe(() => {
      this.getevents()
    })
  }

  ngOnInit(): void {
    this.getevents()
  }

  getevents() {
    this.eventService.getEvents().subscribe({
      next: (res: any) => {
        console.log(res);
        this.dataSource.data = res.response
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    })
  }

  createForm() {
    this.eventForm = this.fb.group({
      _id: [''], // Add eventId field
      eventName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      about: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
      location: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      language: ['', Validators.required],
      isPaid: [false],
      content: [''], // Placeholder for content URL
      imageSlider: [''],
      amount: [0, Validators.min(0)],
      faqs: [''],
      termsAndConditions: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]]
    });

   
  }
  addEvents() {
    this.showevents = !this.showevents
  }
  onSubmit() {

    const formData = this.eventForm.value;

    // Handle create operation
    this.eventService.addEvent(formData).subscribe(
      () => {
        this.showevents = false
        console.log('Event created successfully');
        this.eventForm.reset();
        this.router.navigate(['/events']);
      },
      (error) => {
        console.error('Error creating event:', error);
      }
    );
  }


  editdata(data: any) {
    let dialog = this.dialog.open(EventspopupComponent, {
      height: '90vh',
      width: '90vw',
      data: data
    });
  }
  deleteEvent(data: any) {
    let dialog = this.dialog.open(EventdeleteComponent, {
      width: '300px',
      data:data
     
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }

  handleContentSelectionForContent(event: any) {
    const selectedContent = event.target.files[0];
    if (this.isImage(selectedContent)) {
      this.selectedContentUrl = URL.createObjectURL(selectedContent);
      console.log('Selected content:', selectedContent);
      this.eventForm.patchValue({ content: this.selectedContentUrl });

    } else {
      console.error('Invalid file type. Please select an image for content.');
    }
  }

  handleContentSelectionForImageSlider(event: any) {
    const selectedImageSlider = event.target.files[0];
    if (this.isImage(selectedImageSlider)) {
      this.selectedImageSliderUrl = URL.createObjectURL(selectedImageSlider);
      console.log('Selected image for image slider:', selectedImageSlider);
      this.eventForm.patchValue({ imageSlider: this.selectedImageSliderUrl });
    } else {
      console.error('Invalid file type. Please select an image for the image slider.');
    }
  }


  isImage(content: any): boolean {
    if (!content) return false;
    return content.type.startsWith('image/');
  }

  isVideo(content: any): boolean {
    if (!content) return false;
    return content.type.startsWith('video/');
  }

  resetAmount() {
    if (!this.eventForm.value.isPaid) {
      this.eventForm.patchValue({ amount: 0 });
    }
  }
  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  closeLanguageDropdown() {
    this.isLanguageDropdownOpen = false;
  }
  cancel() {
    // Handle cancel operation, maybe navigate back to events list
    // this.router.navigate(['/events']);
  }

}
