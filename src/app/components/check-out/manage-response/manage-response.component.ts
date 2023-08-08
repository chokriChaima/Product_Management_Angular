import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-response',
  templateUrl: './manage-response.component.html',
  styleUrls: ['./manage-response.component.scss']
})
export class ManageResponseComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public response : string,private route : ActivatedRoute ,private dialogRef: MatDialogRef<ManageResponseComponent>){
  }


 
 
}
