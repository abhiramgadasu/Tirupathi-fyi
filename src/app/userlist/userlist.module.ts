import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchPipe } from '../pipes/search.pipe';




@NgModule({
  declarations: [
    UserlistComponent,
    SearchPipe,

    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule // Include MatDialogModule here
  ]
})
export class UserlistModule { }
