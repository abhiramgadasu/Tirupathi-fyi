import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { EventspopupComponent } from './eventspopup/eventspopup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EventdeleteComponent } from './eventdelete/eventdelete.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NameDirective } from './directives/name.directive';
import { AddressDirective } from './directives/address.directive';
import { PincodeDirective } from './directives/pincode.directive';
import { PhoneDirective } from './directives/phone.directive';
import { AmountDirective } from './directives/amount.directive';
import { EmailDirective } from './directives/email.directive';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    EventComponent,
    EventspopupComponent,
    EventdeleteComponent,
    NameDirective,
    AddressDirective,
    PincodeDirective,
    PhoneDirective,
    AmountDirective,
    EmailDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),

  ],providers:[DatePipe]
})
export class EventModule { }
