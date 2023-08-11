import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ShoppingCart } from '../../../models/shopping-cart';
import { Product } from '../../../models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private shoppingCartService : ShoppingCartService,private router : Router){

  }

  displayedColumns: string[] = ['productName', 'productPrice','quantity','remove'];
  shoppingCartData? : ShoppingCart ;
  dataSource : Product[] = [];

  ngOnInit() : void {
      this.getShoppingCartData(sessionStorage.getItem("shopping_cart_id")!);
  }

  getShoppingCartData(id : string) {
      this.shoppingCartService.getShoppingCartById(id).subscribe(
        {
          next : response => {
            this.shoppingCartData =response ; 
            this.dataSource = this.shoppingCartData.productInfoDTOList; 
            console.log("shopping cart ready to be shown" + response)
          },
          error : error => console.error(error)
        }
            
     );
  }

  checkShoppingCart() : boolean{
       return this.shoppingCartData!.productInfoDTOList.length == 0;
  }
  
  removeFromCart(productInfoID : string) : void{
    console.log('removing', productInfoID, 'from the cart.');
    this.shoppingCartService.decrementFromCart(sessionStorage.getItem("shopping_cart_id")!, productInfoID).subscribe(
      {
        next : response=> {
          console.log(response);
          this.refreshPage();

      },
       error : error =>  console.error('Error fetching products:', error)
      }
    );;
  }

  incrementToCart(productInfoID : string) : void{
    console.log('incrementing', productInfoID, 'to the cart.');
    this.shoppingCartService.incrementToCart(sessionStorage.getItem("shopping_cart_id")!, productInfoID).subscribe(
      {
        next : response=> {
          console.log(response);
          this.refreshPage();
        },
       error : error =>  console.error('Error fetching products:', error)
      }
    );;
  }


  checkout(){
    const data = { key: 'value' };
    this.router.navigate(["/checkout"],{  queryParams: this.shoppingCartData!,});
  }
  refreshPage()
  {
   window.location.reload();
  }
}
