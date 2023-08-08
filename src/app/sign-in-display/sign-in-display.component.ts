import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder,Validators  } from '@angular/forms';
import { AuthenticationService } from '../services/authentication-service';
import { UserNotFoundDialogComponent } from './user-not-found-dialog/user-not-found-dialog.component';
@Component({
  selector: 'app-sign-in-display',
  templateUrl: './sign-in-display.component.html',
  styleUrls: ['./sign-in-display.component.scss']
})
export class SignInDisplayComponent {
  constructor(private router : Router, private dialog: MatDialog,private authenticationService : AuthenticationService, private formBuilder : FormBuilder){

  }

  authenticationForm = this.formBuilder.group(
    {
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }
  );


  openUserNotFoundDialog() {
    this.dialog.open(UserNotFoundDialogComponent, {
      width: '400px',
    });
  }

  
  onSubmit(){

    if(this.authenticationForm
      .valid){
        console.warn('Ready to authenticate user', this.authenticationForm.value); 

     this.authenticationService.basicAuthenticate(this.authenticationForm.value.email!,this.authenticationForm.value.password!).subscribe(
        {
          next : response =>{
            console.log("User Authenticated status : "+response.shoppingCartID + " name "+ response.name);
            if(response!=null){
             this.authenticationService.activateAuthentication(response.shoppingCartID,response.name);
            this.router.navigateByUrl("/home-display");
            }
            else{
              this.openUserNotFoundDialog();
            }
             this.authenticationForm.reset ;
          },
          error : error =>{console.error(error);this.openUserNotFoundDialog();}
        }
      );
    }
   else {
       console.warn('Fill fields');
        }

       
}
  Cancel(){
    this.router.navigateByUrl("")
  }
 

}
