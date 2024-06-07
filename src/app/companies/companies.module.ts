import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
 
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EditpopupComponent } from './editpopup/editpopup.component';
import { DeletecompanyComponent } from './deletecompany/deletecompany.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddressDirective } from './directives/address.directive';
import { NameDirective } from './directives/name.directive';
import { AmountDirective } from './directives/amount.directive';
import { EmailDirective } from './directives/email.directive';
import { PhoneDirective } from './directives/phone.directive';
import { PincodeDirective } from './directives/pincode.directive';
 
 
@NgModule({
  declarations: [
    CompaniesComponent,
    EditpopupComponent,
    DeletecompanyComponent,
    AddressDirective,
    NameDirective,
    AmountDirective,
    EmailDirective,
    PhoneDirective,
    PincodeDirective
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],providers:[DatePipe]
})
export class CompaniesModule { }
 