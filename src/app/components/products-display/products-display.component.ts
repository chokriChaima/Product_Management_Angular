import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';
import { ShoppingCart } from '../../models/shopping-cart';
// Interface


// Sample data with quantity and ratings



@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductsDisplayComponent {
constructor(private productService: ProductsService, 
  private shoppingCartService : ShoppingCartService,
  private autheticationService : AuthenticationService,
  private router :Router){}

  
  allColumns : string[] = ['productID', 'productName', 'productPrice', 'available','ratings','star','manage'];
  displayedColumns: string[] = sessionStorage.getItem("isAuthenticated") == "true"
  ?this.allColumns: this.nonAuthenticatedColumns();
  nonAuthenticatedColumns() : string[]{
    this.allColumns.pop();
   return this.allColumns;
  }

  dataSource : Product[]= [];
  ngOnInit() : void {
    
    this.getProducts();
    this.getCart();
  }


  shoppingCartIDs? : string[] ;

  getProducts(): void {
    this.productService.getProducts().subscribe(
      {
        next : response=> {
          this.dataSource = response;
      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );
  }

  getCart(){
    this.shoppingCartService.getShoppingCartById(sessionStorage.getItem("shopping_cart_id")!).subscribe(
      {
        next : response=> {
          this.shoppingCartIDs = response.productInfoDTOList.map((p)=> p.productID);
      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );
  }
  
  
  
  checkInCartStatus( productID:string) : boolean{
       return this.shoppingCartIDs!.includes(productID);
     
  }
  addToCart(productID : string) : void{
    console.log('Adding', productID, 'to the cart.');
    this.shoppingCartService.addToProduct(sessionStorage.getItem("shopping_cart_id")!, productID).subscribe(
      {
        next : response=> {
          console.log(response);
          window.location.reload()
        // this.router.navigateByUrl("/home-display/#");
      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );;
  }
}


