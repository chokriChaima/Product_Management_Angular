export interface Payment {
    paymentID? : string;
    shoppingCartID: string;
    paymentAmount: number;
    cardNumber: string;
    cardHolderName: string;
}
