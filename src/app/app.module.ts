import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { MatButtonModule } from '@angular/material/button'  
import { MatMenuModule } from '@angular/material/menu'
import {  MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import{ MatToolbarModule } from '@angular/material/toolbar'
import{MatCardModule} from '@angular/material/card'
import {MatTabsModule } from '@angular/material/tabs'

import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'

import { MatError } from '@angular/material/form-field';
import { MatFormFieldModule,MatFormFieldControl  } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/resgister.component';
import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';
import { JwtClientService } from './jwt-client-service'
import { UsersModule } from './admin/users/users.module';
import { AdminModule } from './admin/admin.module';
import { UsersComponent } from './admin/users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './admin.service';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog';

import { CustomerComponent } from './customer/customer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegisterComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent,

    CustomerComponent,
     ContactusComponent,
     CouponComponent,
    
     
   
   
  ],
  imports: [
    BrowserModule,  
     AppRoutingModule,
    BrowserAnimationsModule,
     MatMenuModule,
     MatButtonModule,  
    FormsModule,  
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
   MatDialogModule,
   MatCardModule,
    MatToolbarModule,
    HttpClientModule,
  MatTabsModule,
    MatButtonModule,
  MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
MatInputModule,
AdminModule,
UsersModule,
NgbModule ,
MatTableModule,
MatGridListModule

 
    
    
  ],
  providers: [JwtClientService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
