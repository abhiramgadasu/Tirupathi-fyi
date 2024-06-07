import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserProfileComponent } from './user-profile/user-profile.component';



@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  title = 'Tirupathiapp';
  constructor(public dialog: MatDialog) {}

  data = [

    { id: 1, name: "Mark", mailid: "mark01.com",role:"Angular",lastactivity:"Recently"},
    { id: 2, name: "Jacob",mailid: "mark02.com",role:"Reactive",lastactivity: "5m ago"},
    { id: 3, name: "Larry the Bird",mailid: "mark03.com",role:"ReactNative",lastactivity: "23m ago"},
    { id: 4, name: "Emma watson",mailid: "mark04.com",role:"ReactJs",lastactivity: "2d ago"},
    { id: 5, name: "Michael",mailid: "mark05.com",role:"Dotnet",lastactivity: "Invited"},
    { id: 6, name: "Lenardo",mailid: "mark06.com",role:"Java",lastactivity: "1h ago"},
    { id: 7, name: "Tom Hanks",mailid: "mark07.com",role:"Manual Testing",lastactivity: "22m ago"},
    { id: 8, name: "BradPitt",mailid: "mark08.com",role:"Automation Testing",lastactivity: "3days ago"},
    { id: 9, name: "Angelina",mailid: "mark09.com",role:"Ceo",lastactivity: "2m ago"},
    { id: 10, name: "JohnyDeep",mailid: "mark10.com",role:"Manager",lastactivity: "20m ago"},
    { id: 11, name: "jenniferaniston",mailid: "mark11.com",role:"HR",lastactivity: "Invited"},
    { id: 12, name: "Patcummins",mailid: "mark12.com",role:"SAP",lastactivity: "3m ago"},
    { id: 13, name: "Joesh",mailid: "mark13.com",role:"Python",lastactivity: "43m ago"},
  ]

  searchText = '';


  openDialog(type: string, userData?: any): void {
    let dialogRef;
    if (type === 'User' && userData) {
      dialogRef = this.dialog.open(UserProfileComponent, {
        data: userData,
        height: '500px',
  
        width: '1000px',
      });
    } else {
      // Handle other dialog types if needed
    }

    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
