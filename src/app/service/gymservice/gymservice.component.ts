import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gymservice',
  templateUrl: './gymservice.component.html',
  styleUrl: './gymservice.component.css'
})
export class GymserviceComponent {
  showevents: boolean = false
  gym: any = {
    name: '',
    address: '',
    about: '',
    phoneNumber: '',
    image: '',
    sliderImage: '',
    startTime: '',
    endTime: '',
    establishedDate: '',
    trainers: [],
    facilities: []
  };

  newFacility: any = { facilitiesName: '', facilitiesImage: '' };


  newTrainer: any = { trainerName: '', trainerImage: '' };
  additionalTrainers: any[] = [];
  additionalFacilities: any[] = [];
  facilities: any = [];
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
  createGym() {
    // Push newTrainer to additionalTrainers if it has data
    if (this.newTrainer.trainerName && this.newTrainer.trainerImage) {
      this.additionalTrainers.push({ trainerName: this.newTrainer.trainerName, trainerImage: this.newTrainer.trainerImage });
    }
    
    // Push newFacility to additionalFacilities if it has data
    if (this.newFacility.facilitiesName && this.newFacility.facilitiesImage) {
      this.additionalFacilities.push({ facilitiesName: this.newFacility.facilitiesName, facilitiesImage: this.newFacility.facilitiesImage });
    }
  
    // Copy additionalTrainers to gym object
    this.gym.trainers = [...this.additionalTrainers];
    
    // Copy main facility data to gym object
    this.gym.facilities = [...this.additionalFacilities];
    
    // Add gym creation logic here
    console.log(this.gym);
  }
  
  addAdditionalTrainer() {
    this.additionalTrainers.push({ trainerName: '', trainerImage: '' });
  }

  cancelAdditionalTrainer(index: number) {
    this.additionalTrainers.splice(index, 1);
  }
 
  handleAdditionalTrainerImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.additionalTrainers[index].trainerImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.gym.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  handleSliderImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.gym.sliderImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  addAdditionalFacility() {
    this.additionalFacilities.push({ facilitiesName: '', facilitiesImage: '' });
  }
  

  
  handleFacilitiesImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newFacility.facilitiesImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
  handleAdditionalFacilityImageUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.additionalFacilities[index].facilitiesImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  cancelAdditionalFacility(index: number) {
    this.additionalFacilities.splice(index, 1);
  }
  
 
  handleTrainerImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newTrainer.trainerImage = reader.result as string;
      };
      reader.readAsDataURL(file);
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
