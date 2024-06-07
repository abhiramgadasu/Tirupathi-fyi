import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoginServiceService } from './services/login-service.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  title: any;
  isLoggedIn: boolean = false;

  constructor(public loginService: LoginServiceService, 
    private cdr: ChangeDetectorRef, 
    private dialog: MatDialog,
     private router: Router,private http: HttpClient
    ) { }

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  showlogin: boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  url = environment.url

  ngOnInit(): void {
    this.loginService.isLogin$
      .subscribe((isLoggedIn: any) => {
        this.isLoggedIn = isLoggedIn;
        this.cdr.detectChanges(); // Manually trigger change detection
      });
  }

  ngAfterViewInit(): void {
    // Perform any operations requiring ViewChild initialization here
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout() {
    let id = sessionStorage.getItem('id');
    if (id) {
      // console.log('Logging out user with ID:', id);
      this.http.post(`${this.url}logout/${id}`, {}).subscribe(
        response => {
          // console.log('Logout API response:', response);
          this.loginService.logout();
        },
        error => {
          console.error('Logout API error:', error);
        }
      );
    } else {
      console.warn('No user ID found in session storage.');
      this.loginService.logout();
      // this.router.navigate(['/login']);
    }
  }

  openChangePasswordDialog(): void {
    console.log('Opening change password dialog...');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ChangePasswordComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Perform any action after the dialog is closed, if needed
    });
  }

  onCreateJobClick() {
    // Clear session storage before navigating to the job creation component
    sessionStorage.removeItem('editDetails');
    this.router.navigate(['/jobs']);
  }

  onCreatePlaceClick() {
    // Clear session storage before navigating to the place creation component
    sessionStorage.removeItem('editDetails');
    this.router.navigate(['/placess']);
  }

  onCreateEventClick() {
    // Clear session storage before navigating to the event creation component
    sessionStorage.removeItem('editEventDetails');
    this.router.navigate(['/events']);
  }
}
