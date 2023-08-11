import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  getPayments(): Payment[] {
    throw new Error('Method not implemented.');
  }

  private paymentUrl = "http://localhost:8080/api/payment/";
  private getPaymentsUrl = "http://localhost:8080/api/payment/shopping-cart/";
  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  
  pay(payment : Payment) : Observable<boolean> {
      return this.httpClient.post<boolean>(
        this.paymentUrl+"addPayment",payment
      );
  }

  getPaymentsByShoppingCartId() :Observable<Payment[]>{
      return this.httpClient.get<Payment[]>(
        this.getPaymentsUrl + sessionStorage.getItem("shopping_cart_id")
      ) }

  deletePaymentById(paymentId : string) :Observable<boolean>{
   return  this.httpClient.delete<boolean>(
      this.paymentUrl+paymentId
    )
  }
}
