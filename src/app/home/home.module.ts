import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
// import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';
import { UserlistRoutingModule } from '../userlist/userlist-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { EducationListComponent } from './education-list/education-list.component';
import { HospitalListComponent } from './hospital-list/hospital-list.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';






@NgModule({
  declarations: [
    HomeComponent,
    EducationListComponent,
    HospitalListComponent,
 
  
    // SearchPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    UserlistRoutingModule,
    FormsModule,
    NgSelectModule,
    MatIconModule,
    SharedModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ]
})
export class HomeModule { }
