import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-temples',
  templateUrl: './temples.component.html',
  styleUrl: './temples.component.css'
})
export class TemplesComponent {
  templeForm: FormGroup;
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
    this.templeForm = this.formBuilder.group({
      temple_name: ['', Validators.required],
      description: [''],
      website: [''],
      location: ['', Validators.required],
      rating: [''],
      is_active: [false]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.templeForm.valid) {
      console.log(this.templeForm.value);
      // Handle form submission logic here
    } else {
      console.error("Form is invalid");
      // Handle invalid form submission
    }
  }
  selectedContent: File | null = null;
selectedContentUrl: string | null = null;

// Method to handle content selection
handleContentSelection(event: any) {
    const file = event.target.files[0];
    this.selectedContent = file;
    
    // Reset any previous URL
    this.selectedContentUrl = null;

    if (file) {
        // If it's an image, generate preview URL
        if (file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.selectedContentUrl = reader.result as string;
            };
        }
        // If it's a video, set the URL directly
        else if (file.type.startsWith('video')) {
            this.selectedContentUrl = URL.createObjectURL(file);
        }
    }
}

// Method to check if the selected content is an image
isImage(file: File): boolean {
    return file && file.type.startsWith('image');
}

// Method to check if the selected content is a video
isVideo(file: File): boolean {
    return file && file.type.startsWith('video');
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
