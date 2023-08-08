import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import the necessary module
import { MatInputModule } from '@angular/material/input';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignInDisplayComponent } from './sign-in-display/sign-in-display.component';
import { SignUpDisplayComponent } from './components/sign-up-display/sign-up-display.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserNotFoundDialogComponent } from './sign-in-display/user-not-found-dialog/user-not-found-dialog.component';
import { LandingDisplayComponent } from './components/landing-display/landing-display.component';
import { HomeDisplayComponent } from './components/home-display/home-display.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ManageResponseComponent } from './components/check-out/manage-response/manage-response.component';
const routes: Routes = [
    {
        path : "", component:LandingDisplayComponent
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
      
    ]
})
export class AppModule { }
