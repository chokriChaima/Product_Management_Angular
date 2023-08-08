import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = "http://localhost:8080/api/payment/addPayment"
  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  pay(payment : Payment) : Observable<boolean> {
      return this.httpClient.post<boolean>(
        this.paymentUrl,payment
      );
  }
}
