import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';


import { ListUsersComponent } from './admin/users/list-users/list-users.component';
import { UsersComponent } from './admin/users/users.component';

import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/resgister.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component'
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { CouponComponent } from './coupon/coupon.component';
import { CompanyComponent } from './admin/company/company.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent},
  {path:'users',component:UsersComponent},
   {path:'createuser',component:AddUserComponent},
   {path:'company',component:CompanyComponent},


 {path:'product',component:ProductComponent},
  {path:'listusers',component:ListUsersComponent},
  {path:'coupon',component:CouponComponent},
 {path:'productlist',component:ProductlistComponent},
  { path: 'customer', component: CustomerComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'contactus',component:ContactusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
