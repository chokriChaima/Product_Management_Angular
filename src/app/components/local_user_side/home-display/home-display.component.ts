import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication-service';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.scss']
})
export class HomeDisplayComponent {
  constructor(private router :  Router, private authenticationService :  AuthenticationService){

  }
  ngOnInit(){
  
    this.userName = sessionStorage.getItem("user_name")!;
  }

  userName? : string ;
  signOut(){
    this.authenticationService.signOut();
    this.router.navigateByUrl("/");
  }

  goToProfile(){
 
    this.router.navigateByUrl("/user-info-display");
  }
}
