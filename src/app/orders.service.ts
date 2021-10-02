import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient , private datepipe:DatePipe , private pservice:ProductService) {
    this.order=new Orders();
   }
   baseURL="http://localhost:8088/fms";

  order:Orders;
  last_trnstn_date:Date = new Date();
  strobj:string='';
  time_days:number=0;
  payButton = false;

  createOrder(o_id:string,pid:string,uid:string,emi_period:number,dop:Date){
    this.order.order_id = o_id;
    this.order.prod_id  = pid;
    this.order.user_id  = uid;
    this.order.emi_period = emi_period;
    this.order.date_of_purchase = this.datepipe.transform(dop , 'yyyy-MM-dd');
  }

  addNewOrder(orderobj:Orders){
    return this.http.post(this.baseURL+"/orders",orderobj);
  }

  helpergetLastTransaction(userid:string , prodid:string){
    this.getLastTransaction(userid , prodid).subscribe(
      (data)=>{
        this.order = data as Orders;
        this.last_trnstn_date = this.order.date_of_purchase;
        this.strobj = JSON.stringify(this.last_trnstn_date);
        this.time_days = Math.ceil((new Date().getTime() - new Date(this.strobj).getTime())/(1000*3600*24));
        console.log("last trn stringify "+this.strobj);
        console.log("last_transaction in subscribe "+this.last_trnstn_date);
        console.log("time gap in subscribe "+this.time_days);

        if(this.time_days < 30){
          console.log("if in subscribe of oservice");
          this.payButton = true;
          console.log(this.payButton);
        }
        else{
          this.payButton = false;
        }
      },
      (error)=>{
        console.log(error);
      }
    )
    return this.payButton;
  }


  getLastTransaction(userid:string , prodid:string){
    return this.http.get(this.baseURL+"/orders/"+userid+"/"+prodid);
  }

  getPayButtonStatus(){
    return this.payButton;
   }

   getusersorder(userid:string)
   {
     return this.http.get(this.baseURL+"/orders/"+userid);
   }

}
