import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  showevents: boolean = false
  education: any = {
    name: '',
    address: '',
    about: '',
    phoneNumber: '',
    image: '',
    sliderImage: '',
    startTime: '', // Add startTime property
    endTime: '', // Add endTime property
    establishedDate: '', // Add establishedDate property
    doctors: [],
    courseName: '',
  };
  newCourse: any = [];
  addCourseFeilds: any[] = [];
  additionalCourses: any[] = [];
  hospitals: any[] = []
  additionalFacilities: any[] = [];
  facilities: any = []

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
  constructor() { }

  createEducation() {
    // this.education.doctors.push(this.newCourse);
    // this.education.doctors = this.education.doctors.concat(this.addCourseFeilds);
    this.hospitals.push(this.education);
    const allCourses = [this.newCourse, ...this.addCourseFeilds];
    const facilities = [this.facilities, ...this.additionalFacilities]

    // Clear input fields
    this.education = {
      name: this.education.name,
      address: this.education.address,
      about: this.education.about,
      phoneNumber: this.education.phoneNumber,
      image: this.education.image,
      sliderImage: this.education.sliderImage,
      startTime: this.education.startTime,
      endTime: this.education.endTime,
      establishedDate: this.education.establishedDate,
      courses: allCourses,
      facilities: facilities,
    };

    console.log(this.education, 'list');

  }
  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.education.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  handleSliderImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.education.sliderImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  handleEduImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.education.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  handleCourseImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newCourse.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  addAdditionalFeilds() {
    // Push an empty doctor object to additionalDoctors array
    this.addCourseFeilds.push({ CourseName: '', image: null });
    console.log(this.addCourseFeilds);

  }
  cancelAdditionalFeilds(index: number) {
    // Remove the additional doctor at the specified index
    this.addCourseFeilds.splice(index, 1);
  }
  handleAdditionalCourseImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.addCourseFeilds[index].image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  handleFacilitiesImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.facilities.facilitiesImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  addAdditionalFacility() {
    this.additionalFacilities.push({ facilitiesName: '', image: '' });
  }
  handleAdditionalFacilityImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.additionalFacilities[index].image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  cancelAdditionalFacility(index: number) {
    this.additionalFacilities.splice(index, 1);
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
