export interface Product {
    productID: string;
    productInfoID : string;
    productName: string;
    productPrice: number;
    available: boolean;
    totalPrice: number;
    quantity: number; 
    ratings: number; // New attribute for product ratings
  }