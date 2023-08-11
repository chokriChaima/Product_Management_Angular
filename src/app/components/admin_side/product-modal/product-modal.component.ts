import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  constructor( private router : Router,@Inject(MAT_DIALOG_DATA) public product : Product,private formBuilder : FormBuilder,private productService : ProductsService, private dialogRef : MatDialogRef<ProductModalComponent>){
  }
  
  productManagementForm = this.formBuilder.group(
  {  
    name : this.product.productName,
    price : this.product.productPrice,

    quantity : this.product.quantity
  }
    
  )
  onSubmit(){
    this.setEditedProduct();
    console.info('Ready to edit :', this.product.productName);

    this.productService.editProduct(this.product).subscribe(
        {
          next : response =>{
            console.info(response);
            window.location.reload();
          }
        }
    )
  }

  setEditedProduct(){
    this.product.productName = this.productManagementForm.value.name!;
    this.product.productPrice = this.productManagementForm.value.price!;
    this.product.quantity = this.productManagementForm.value.quantity!;

  }
}
