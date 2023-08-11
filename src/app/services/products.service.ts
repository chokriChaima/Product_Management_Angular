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

  deleteProduct(productID : string)  {
    console.info("product id ", productID);
    return this.httpClient.delete(this.getProductsUrl+"/"+productID);
  }

  setAvailability(productID : string, isAvailable : boolean) : Observable<boolean>{
    return this.httpClient.post<boolean>(
      this.getProducts+"/"+productID+"/availability",
      {
        id : productID,
        status : isAvailable
      }) ;
  }

  editProduct(product : Product) : Observable<Product>{
   return this.httpClient.put<Product>(
      this.getProductsUrl+"/"+product.productID, product
    )
  }
  
}
