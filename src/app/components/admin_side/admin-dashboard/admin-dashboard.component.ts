import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  
  constructor(private authenticationService : AuthenticationService,private dialog : MatDialog, private router : Router, private productsService : ProductsService){

  } ;

  itemChecked : number = 0 ;
  sharedPath = "assets/images/icons/";

  fullName : string ="Alex Russo";


  displayedColumns = [
    'id','name', 'price', 'quantity','status', 'action'
  ] ;
  
  displayedUsersColumns = [
    'id','userName', 'email', 'password','cart-id', 'action'
  ] ;
  products? : Product[] ;

  users? : User[] ;

  ngOnInit(){
    this.getProducts() ;
    this.getUsers();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(
      {
        next : response=> {
          this.products = response;
      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );
  }


  getUsers(): void {
    this.authenticationService.getUsers().subscribe(
      {
        next : response=> {
          this.users = response;
      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );
  }


  editProduct(product : Product){
    this.dialog.open(
      ProductModalComponent,
      {data : product}
    )
  }

  deleteProduct(productId : string){
      this.productsService.deleteProduct(productId).subscribe(
        {
          next : () => window.location.reload() ,
        
          error : error => console.warn("failed with error : ", error)
        }
      )
  }

  deleteUser(userId : string){
    this.authenticationService.deleteUser(userId).subscribe(
      {
        next : () => window.location.reload() ,
      
        error : error => console.warn("failed with error : ", error)
      }
    )
}


  getImageSource() : string{

    switch(this.itemChecked){
 
      case 1 : return this.sharedPath+"add.png";
      case 2 : return  this.sharedPath+"manage_accounts.png";  
      default: return  this.sharedPath+"list.png";
    }
  }
  getTitle() : string{
    switch(this.itemChecked){
 
      case 1 : return "Add Product";
      case 2 : return "User Management";  
      default: return " Product List";
    }

  }

  setItemChecked(newItem : number){
      this.itemChecked= newItem;
  }

  getItemChecked() : number{
    return this.itemChecked ;
  }

  signOut(){
    this.router.navigateByUrl("/sign-in-display")
  }
}
