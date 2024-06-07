import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';
import { EducationComponent } from './education/education.component';
import { GymserviceComponent } from './gymservice/gymservice.component';
import { ElectricianComponent } from './electrician/electrician.component';
import { HospitalComponent } from './hospital/hospital.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { TemplesComponent } from './temples/temples.component';
import { TravelsComponent } from './travels/travels.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { WeddingCeremonyComponent } from './wedding-ceremony/wedding-ceremony.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'gymservice', component: GymserviceComponent },
  { path: 'Hospital', component: HospitalComponent },
  { path: 'temples', component: TemplesComponent},
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'travels', component: TravelsComponent },
  { path: 'restaurent', component: RestaurentComponent },
  { path: 'wedding-ceremony', component: WeddingCeremonyComponent },
  { path: 'electrician', component: ElectricianComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
