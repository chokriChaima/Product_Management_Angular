import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LUser } from '../models/local-user';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  private addUserurl ="http://localhost:8080/api/local-users" ;
  private basicAuthenticateUrl ="http://localhost:8080/api/local-users/authenticate" ;



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { 
  
  }

  addLUser(newUser : LUser ) : Observable<LUser>{
    return this.httpClient.post<LUser>(this.addUserurl, newUser, this.httpOptions);
  }

  signOut(){
    sessionStorage.setItem("shopping_cart_id", "");

    sessionStorage.setItem("isAuthenticated", "false");
  }

  activateAuthentication(id : string, name : string){
    sessionStorage.setItem("shopping_cart_id", id);
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("isAuthenticated", "true");
  }
  basicAuthenticate(email : string, password : string) : Observable<UserData>{
   return this.httpClient.post<UserData>(this.basicAuthenticateUrl, {
      "email" : email,
      "password" :password
  }, this.httpOptions);
  }
}
