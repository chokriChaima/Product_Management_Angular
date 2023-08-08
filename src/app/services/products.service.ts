import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private addProductUrl ="http://localhost:8080/api/products/multiple";
  private getProductsUrl = "http://localhost:8080/api/products"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  constructor(private httpClient : HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.getProductsUrl);
  } 
}
