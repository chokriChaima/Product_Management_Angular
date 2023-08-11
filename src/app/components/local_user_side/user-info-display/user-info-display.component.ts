import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.scss']
})
export class UserInfoDisplayComponent {
    
   constructor(private router : Router, private paymentService: PaymentService){
    
   }


 
   



  
}
