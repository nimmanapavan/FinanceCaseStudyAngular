import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ApplicationhomepageComponent } from './applicationhomepage/applicationhomepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JoiningfeesComponent } from './joiningfees/joiningfees.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProcessingfeeComponent } from './processingfee/processingfee.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ShowallproductsComponent } from './showallproducts/showallproducts.component';
import { ShowallusersComponent } from './showallusers/showallusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserstoapproveComponent } from './userstoapprove/userstoapprove.component';

const routes: Routes = [
  {path:"",component:ApplicationhomepageComponent},
  {path:"loginpage",component:UserloginComponent},
  {path:"showallusers",component:ShowallusersComponent},
  {path:"showallproducts",component:ShowallproductsComponent},
  {path:"userstoapprove",component:UserstoapproveComponent},
  {path:"addproducts",component:AddproductsComponent},
  {path:"adminhome",component:AdminhomeComponent},
  {path:"userregistration",component:UserregistrationComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"productslist",component:ProductslistComponent},
  {path:'productinfo/:prod_id' , component:ProductinfoComponent},
  {path:'processingfee/:prod_id',component:ProcessingfeeComponent},
  {path:"orderdetails/:prod_id", component:OrderdetailsComponent},
  {path:"updateuser", component:UpdateuserComponent},
  {path:"joiningfees", component:JoiningfeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
