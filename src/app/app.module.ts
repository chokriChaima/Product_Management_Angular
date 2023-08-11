import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatFormFieldModule } from '@angular/material/form-field'; // Import the necessary module
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LandingDisplayComponent } from './components/shared/landing-display/landing-display.component';
import { UserInfoDisplayComponent } from './components/local_user_side/user-info-display/user-info-display.component';
import { HomeDisplayComponent } from './components/local_user_side/home-display/home-display.component';
import { CheckOutComponent } from './components/local_user_side/check-out/check-out.component';
import { ManageResponseComponent } from './components/local_user_side/check-out/manage-response/manage-response.component';
import { ProductsDisplayComponent } from './components/local_user_side/products-display/products-display.component';
import { ShoppingCartComponent } from './components/local_user_side/shopping-cart/shopping-cart.component';
import { UserNotFoundDialogComponent } from './components/local_user_side/shopping-cart/user-not-found-dialog/user-not-found-dialog.component';
import { SignInDisplayComponent } from './components/shared/sign-in-display/sign-in-display.component';
import { SignUpDisplayComponent } from './components/local_user_side/sign-up-display/sign-up-display.component';
import { PaymentItemComponent } from './components/local_user_side/user-info-display/payment-item/payment-item.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AdminDashboardComponent } from './components/admin_side/admin-dashboard/admin-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ProductModalComponent } from './components/admin_side/product-modal/product-modal.component';
const routes: Routes = [
    {
        path : "", component:LandingDisplayComponent
    },
    {
        path : "admin-home-page", component:AdminDashboardComponent
    },
    {
        path : "user-info-display", component:UserInfoDisplayComponent
    },
    {
        path : "home-display", component:HomeDisplayComponent
    },
    {
        path : "sign-in-display", component: SignInDisplayComponent
    },
    {
        path : "sign-up-display", component: SignUpDisplayComponent
    },
    {
        path : "checkout", component: CheckOutComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    
        ProductsDisplayComponent,
        SignInDisplayComponent,
        SignUpDisplayComponent,
        UserNotFoundDialogComponent,
        LandingDisplayComponent,
        HomeDisplayComponent,
        ShoppingCartComponent,
        CheckOutComponent,
        ManageResponseComponent,
        UserInfoDisplayComponent,
        PaymentItemComponent,
        AdminDashboardComponent,
        ProductModalComponent,
        
      
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        RouterModule
    ],
    imports: [
        MatButtonToggleModule,
        FormsModule,
        MatCardModule,
        MatDialogModule, MatButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        BrowserModule,
        MatTableModule,
        MatFormFieldModule,
        AppRoutingModule,
        MatInputModule,MatIconModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatMenuModule,
      
    ]
})
export class AppModule { }
