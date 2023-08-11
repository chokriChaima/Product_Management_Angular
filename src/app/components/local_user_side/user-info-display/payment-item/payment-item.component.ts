import { Component, Input } from '@angular/core';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-item',
  templateUrl: './payment-item.component.html',
  styleUrls: ['./payment-item.component.scss']
})
export class PaymentItemComponent {


  constructor( private paymentService: PaymentService){
    
  }

  ngOnInit(){
   this.getPayments();
   }
   userPayments? : Payment[] ;

  getPayments(){

    this.paymentService.getPaymentsByShoppingCartId().subscribe(
      {
        next : response =>{ 
          
          response.forEach((i)=> console.log('getting id',i.paymentID));
          this.userPayments = response},
        error : error => console.error(error)
      }
      
    )
   }

  deletePaymentById(id : string){
    this.paymentService.deletePaymentById(id).subscribe(
      {
        next : response => window.location.reload()
        ,error : error => console.error(error)
      } 
    )
   }

   emptyPayments() : boolean{
    return this.userPayments!.length ==0;
   }
}
