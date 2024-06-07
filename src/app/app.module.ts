import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'; // Add MatMenuModule here
import {MatDialogModule} from '@angular/material/dialog';
import { MainComponent } from './main/main.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeModule } from './home/home.module';
import { AuthInterceptor } from './auth.interceptor';
import { TimeAgoPipe } from './pipes/time-ago.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChangePasswordComponent,
    TimeAgoPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatListModule, 
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    NgSelectModule,
    HomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
