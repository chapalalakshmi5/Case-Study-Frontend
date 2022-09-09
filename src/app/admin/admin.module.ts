import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { ProductComponent } from './product/product.component';


import { BrowserModule } from '@angular/platform-browser';  


import { MatError } from '@angular/material/form-field';



import {MatGridListModule} from '@angular/material/grid-list';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MatButtonModule } from '@angular/material/button'  
import { MatMenuModule } from '@angular/material/menu'
import {  MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';

import{ MatToolbarModule } from '@angular/material/toolbar'
import{MatCardModule} from '@angular/material/card'
import {MatTabsModule } from '@angular/material/tabs'

import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ProductlistComponent } from './productlist/productlist.component';
import { CompanyComponent } from './company/company.component';




@NgModule({
  declarations: [
    ProductComponent,
    ProductlistComponent,
    CompanyComponent,
   
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,  
   FormsModule,  
   ReactiveFormsModule,
   MatIconModule,
   MatSidenavModule,
   MatListModule,
   AppRoutingModule,
  MatCardModule,
   MatToolbarModule,
   HttpClientModule,
 MatTabsModule,
   MatButtonModule,
 MatCheckboxModule,
   MatIconModule,
   MatFormFieldModule,
MatInputModule,
MatDialogModule,
MatPaginatorModule,
MatSortModule,
CdkTableModule,
MatTableModule,
NgbModule,
MatGridListModule,
BrowserModule,
MatSelectModule,
MatOptionModule
  ]
})
export class AdminModule { }
