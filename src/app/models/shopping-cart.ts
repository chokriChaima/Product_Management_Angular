import { Product } from "./products";

export interface ShoppingCart {
    id: string,
    productInfoDTOList : Product[] ;
    totalPrice :number ;
    totalQuantity : number ;
    paid : boolean ;

}