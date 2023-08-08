import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs" ;
import { ShoppingCart } from '../models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartUrl = "http://localhost:8080/api/shopping-cart";

  private addToCartUrl =
    "http://localhost:8080/api/shopping-cart/addProduct";


  private incrementCartUrl =
    "http://localhost:8080/api/shopping-cart/increment";
  
  private decrementCartUrl =
  "http://localhost:8080/api/shopping-cart/decrement";
 
  constructor(private httpClient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getShoppingCartById(id : string) : Observable<ShoppingCart>{
      return this.httpClient.get<ShoppingCart>(this.shoppingCartUrl+"/"+id)
  }

  addToProduct(cartID : string, productID : string){
    return this.httpClient.put<ShoppingCart>(this.addToCartUrl,{
      cartID : cartID,
      productID : productID
    }, this.httpOptions);
  }

  incrementToCart(cartID : string, productID : string){
    return this.httpClient.put<ShoppingCart>(this.incrementCartUrl,{
      cartID : cartID,
      productID : productID
    }, this.httpOptions);
  }

  decrementFromCart(cartID : string, productInfoID : string){
    return this.httpClient.put<ShoppingCart>(this.decrementCartUrl,{
      cartID : cartID,
      productID : productInfoID
    }, this.httpOptions);
  }

 
}
