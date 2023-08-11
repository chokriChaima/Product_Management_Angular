import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-user-not-found-dialog',
  templateUrl: './user-not-found-dialog.component.html',
  styleUrls: ['./user-not-found-dialog.component.scss'],
  
})
export class UserNotFoundDialogComponent {
  constructor(public dialogRef: MatDialogRef<UserNotFoundDialogComponent>) {}
}
