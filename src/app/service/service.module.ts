import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { MatIconModule } from '@angular/material/icon';
import { EducationComponent } from './education/education.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GymserviceComponent } from './gymservice/gymservice.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { HospitalComponent } from './hospital/hospital.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { TemplesComponent } from './temples/temples.component';
import { TravelsComponent } from './travels/travels.component';
import { WeddingCeremonyComponent } from './wedding-ceremony/wedding-ceremony.component';
import { NameDirective } from './travels/directives/name.directive';
import { AmountDirective } from './travels/directives/amount.directive';
import { AddressDirective } from './travels/directives/address.directive';
import { PhoneDirective } from './restaurent/directives/phone.directive';
import { EmailDirective } from './restaurent/directives/email.directive';
import { PincodeDirective } from './temples/directives/pincode.directive';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    ServiceComponent,
    EducationComponent,
    GymserviceComponent,
    ElectricianComponent,
    HospitalComponent,
    RealEstateComponent,
    RestaurentComponent,
    TemplesComponent,
    TravelsComponent,
    WeddingCeremonyComponent,
    NameDirective,
    AmountDirective,
    AddressDirective,
    PhoneDirective,
    EmailDirective,
    PincodeDirective

  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,

    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,

  ]
})
export class ServiceModule { }
