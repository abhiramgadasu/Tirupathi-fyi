import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { JobpopupComponent } from './jobpopup/jobpopup.component';
import { JobdeleteComponent } from './jobdelete/jobdelete.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddressDirective } from './directives/address.directive';
import { AmountDirective } from './directives/amount.directive';
import { NameDirective } from './directives/name.directive';


@NgModule({
  declarations: [
    JobsComponent,
    JobpopupComponent,
    JobdeleteComponent,
    AddressDirective,
    AmountDirective,
    NameDirective
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
    
  ]
  ,providers:[DatePipe]
})
export class JobsModule { }
