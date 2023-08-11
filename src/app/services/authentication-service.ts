import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  private manageUsersurl ="http://localhost:8080/api/local-users" ;
  private basicAuthenticateUrl ="http://localhost:8080/api/access/sign-in" ;



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { 
  
  }

  addLUser(newUser : User ) : Observable<User>{
    return this.httpClient.post<User>(this.manageUsersurl, newUser, this.httpOptions);
  }

  signOut(){
    sessionStorage.setItem("shopping_cart_id", "");

    sessionStorage.setItem("isAuthenticated", "false");
  }

  getUsers() : Observable<User[]>{
      return this.httpClient.get<User[]>(
        this.manageUsersurl+"/users-list"
      );
  }

  deleteUser(userId : string) {
    return this.httpClient.delete(
      this.manageUsersurl+"/"+userId
    );
}
  
  activateLUserAuthentication(id : string, name : string){
    sessionStorage.setItem("shopping_cart_id", id);
    sessionStorage.setItem("user_name", name);
    sessionStorage.setItem("isAuthenticated", "true");
  }
  basicAuthenticate(email : string, password : string) : Observable<User>{
   return this.httpClient.post<User>(this.basicAuthenticateUrl, {
      "email" : email,
      "password" :password
  }, this.httpOptions);
  }
}
