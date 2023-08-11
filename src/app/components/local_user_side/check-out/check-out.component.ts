import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { PaymentService } from 'src/app/services/payment.service';

import {MatDialog} from '@angular/material/dialog';
import { ManageResponseComponent } from './manage-response/manage-response.component';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent {
constructor(private dialog : MatDialog ,private activatedRoute : ActivatedRoute,private router : Router,private paymentService : PaymentService, private formBuilder : FormBuilder){};
 
failureResponse : string = "Unfortunately something went wrong with your payment process, maybe try again a bit later.";
successResponse : string = "Great news, your purchase is activated and we'll be delivered as soon as possible.";
deliveryFee : number = 15.0;
  shoppingCartData? : ShoppingCart 
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.shoppingCartData = params as ShoppingCart ;

    });
  }
  checkoutForm = this.formBuilder.group(
    {

      cardNumber: ["", Validators.required],
      cardHolderName : ["", Validators.required]
    }
  )

  
  convertToInt(val: any){
    return parseInt(val);
  }
  getTotalPrice() : number{
    return this.convertToInt(this.shoppingCartData!.totalPrice) + this.convertToInt(this.deliveryFee)
  }
  updateFee(type : string){
    this.deliveryFee = this.getFeeBasedOnDeliveryType(type);
  }

  getFeeBasedOnDeliveryType(type : string) : number{
    switch(type){
      case 'sameDay' : 
      return 50;
      case 'express' : 
      return 35 ;
      default:
      return 15;
    }
  }
  onSubmit(){
    if(this.checkoutForm.valid){
      console.info("Ready to create payment object ", this.checkoutForm.value);
      const payment : Payment = {
        shoppingCartID: this.shoppingCartData!.id,
        paymentAmount:this.getTotalPrice(),
        cardNumber: this.checkoutForm.value.cardNumber!,
        cardHolderName: this.checkoutForm.value.cardHolderName!
      }
      this.pay(payment);
    }
  }

  cancelPayment(){
    this.router.navigateByUrl("home-display");
  }
  pay(payment : Payment){
    console.log("about to send request ", this.getTotalPrice());
    this.paymentService.pay(payment).subscribe(
      {
        next : ()=>{
              this.openResponseDialog(this.successResponse);
        },
        error : error =>{
          console.error("Payment FAILED ",error);
          this.openResponseDialog(this.failureResponse)
        }
      }
    )
  }

  openResponseDialog(response : string) {
    this.dialog.open(ManageResponseComponent,{
      data : response,
    width : "500px"
    })
    this.router.navigateByUrl("home-display");
  
  }


}


