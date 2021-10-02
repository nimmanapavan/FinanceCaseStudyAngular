import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ShowallusersComponent } from './showallusers/showallusers.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { UserstoapproveComponent } from './userstoapprove/userstoapprove.component';
import { ShowallproductsComponent } from './showallproducts/showallproducts.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { DatePipe } from '@angular/common';
import { ApplicationhomepageComponent } from './applicationhomepage/applicationhomepage.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProcessingfeeComponent } from './processingfee/processingfee.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    ShowallusersComponent,
    AddproductsComponent,
    UserstoapproveComponent,
    ShowallproductsComponent,
    UserregistrationComponent,
    ApplicationhomepageComponent,
    ProductslistComponent,
    AdminloginComponent,
    DashboardComponent,
    OrderdetailsComponent,
    ProcessingfeeComponent,
    ProductinfoComponent,
    UserloginComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
