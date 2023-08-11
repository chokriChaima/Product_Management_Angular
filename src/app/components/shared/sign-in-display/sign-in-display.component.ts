import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder,Validators  } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication-service';
import { UserNotFoundDialogComponent } from '../../local_user_side/shopping-cart/user-not-found-dialog/user-not-found-dialog.component';
import AccessPermission from 'src/app/models/access-permission';
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
            console.log("User Authenticated status : "+response.accessPermission + " name "+ response.userName);
            if(response!=null){
                
              switch(response.accessPermission){
                case AccessPermission.USER : { 
                  this.authenticationService.activateLUserAuthentication(response.shoppingCartID!,response.userName);
                  this.router.navigateByUrl("/home-display");
                } break;
                case AccessPermission.ADMIN:{
                  this.router.navigateByUrl("/admin-home-page");
                }
        
              }
              if(response.shoppingCartID!=null){
                
              }
            
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
