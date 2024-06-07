import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacessRoutingModule } from './placess-routing.module';
import { PlacessComponent } from './placess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PlacepopupComponent } from './placepopup/placepopup.component';
import { DeletejobComponent } from './deletejob/deletejob.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NameDirective } from './directives/name.directive';
import { AddressDirective } from './directives/address.directive';


@NgModule({
  declarations: [
    PlacessComponent,
    PlacepopupComponent,
    DeletejobComponent,
    NameDirective,
    AddressDirective
  ],
  imports: [
    CommonModule,
    PlacessRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class PlacessModule { }
