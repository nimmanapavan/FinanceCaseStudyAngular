import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public orderdata:OrdersService,public usersdata:UsersService,public proddata:ProductService,private rtr:Router) {
    
  }
  obj:any;
  obj1:any;
  prod:any;
  product= new Array()
  totalused:number=0;
  remainingcredit:number=0;

 
  
  validitydate:any;
  tcredit:number=0
  approval:boolean|undefined


  ngOnInit(): void {
    this.usersdata.getusersbyid(this.usersdata.user_id).subscribe((data)=>{this.obj1=data as Users
      console.log(this.obj1.date_of_registration)
      var date=new Date(this.obj1.date_of_registration)
      if(this.obj1.card_type==="gold")
      {
        this.validitydate=(date.getUTCMonth()+1)+"/"+(date.getUTCFullYear()+2)
        this.tcredit=100000

      }
      else
      {
        this.validitydate=(date.getUTCMonth()+1)+"/"+(date.getUTCFullYear()+3)
        this.tcredit=150000
      }
      if(this.obj1.approval_status==="yes")
      {
          this.approval=true

      }
      else 
      {
        this.approval=false
      }
    });
    this.totalused=0
    this.remainingcredit=0
    this.orderdata.getusersorder(this.usersdata.user_id).subscribe((data)=>{this.obj=data 
      console.log(this.obj)
      this.remainingcredit=this.tcredit
      
      for(let o of this.obj)
      {
        let product = new Array
        this.proddata.searchProductById(o.prod_id).subscribe(
          (data)=>{
            this.prod = data as Products
            this.product.push(this.prod)
            
            var d=new Date(o.date_of_purchase)
            if(!(this.monthDiff(d,new Date())>=o.emi_period)){
              this.remainingcredit=this.remainingcredit-this.prod.price
              this.totalused=this.totalused+this.prod.price
              o.status="On Going"
            }
            else{
              o.status="Completed"
            }
          },
          (error)=>{
            console.log(error);
          }
        ) 
         
      }
      
    })
   }
    monthDiff(d1:Date,d2:Date) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    console.log(d1,d1.getMonth())
    console.log(d2,d2.getMonth())
    months += d2.getMonth();
    console.log(months)
    
    return months <= 0 ? 0 : months;
}

    productslist()
    {
      this.rtr.navigate(["productslist"]);
    }
}
