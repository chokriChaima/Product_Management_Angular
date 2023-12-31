import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { FormBuilder,Validators , } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication-service';
import AccessPermission from 'src/app/models/access-permission';
@Component({
  selector: 'app-sign-up-display',
  templateUrl: './sign-up-display.component.html',
  styleUrls: ['./sign-up-display.component.scss']
})
export class SignUpDisplayComponent {


  constructor(private router : Router, private formBuilder : FormBuilder,private authenticationService : AuthenticationService){

  }

  registrationForm = this.formBuilder.group(
    {
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }
  )

  getErrorMessage(controlName: string) {
    const control = this.registrationForm.get(controlName);
    if (control!.hasError('required')) {
      return 'This field is required.';
    }
    if (control!.hasError('email')) {
      return 'Invalid email format.';
    }
    if (control!.hasError('minlength')) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  }

  onSubmit(){

    if(this.registrationForm
      .valid){
        console.warn('User created', this.registrationForm.value);

    console.log("ready to send out access permission ",    AccessPermission.USER)
    const newUser: User = {
      userName: this.registrationForm.value.userName!,
      email: this.registrationForm.value.email!,
      password: this.registrationForm.value.password!,
      accessPermission: AccessPermission.USER
    };

     this.authenticationService.addLUser(newUser).subscribe(
        {
          next : ()=>{
            console.log("New user has been added " + newUser.accessPermission);
            this.registrationForm.reset ;
            this.router.navigateByUrl("/sign-in-display");
          },
          error : error =>console.error(error)
        }
      );
    }
   else {
       console.warn('NO User created');
        }
}

  Cancel(){
    this.router.navigateByUrl("")
  }
}
