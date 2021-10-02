import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { v4 as uuidv4 } from 'uuid';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  prodid:string='';
  userid:string='';
  dop = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  order = new Orders();
  product = new Products();
  last_trnstn_obj = new Orders();
  last_trnstn_date = new Date();
  strobj = '';

  constructor(public datepipe:DatePipe ,private rtr:Router, private oservice:OrdersService , private activeRoute:ActivatedRoute , private pservice:ProductService,private uServ:UsersService) { }

  /*
  d1 = new Date("2021-09-11");
  d2 = new Date();
*/  

  time_days : any;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.prodid = params.get("prod_id") as string;
        console.log(this.prodid)
      }
    )

    //fetching prod with prod_id
    
    this.pservice.searchProductById(this.prodid).subscribe(
      (data)=>{
        this.product = data as Products
      },
      (error)=>{
        console.log(error);
      }
    )

    let myuuid = uuidv4();
    console.log("uuid is "+myuuid);
    
    
    this.order.order_id = myuuid;
    this.order.prod_id = this.prodid;
    this.order.user_id=this.uServ.getuserId();
    this.order.emi_period = this.pservice.emi_period;
    this.order.date_of_purchase = this.dop; //this.datepipe.transform(this.dop, 'yyyy-MM-dd');
    
    console.log(this.order);

    this.oservice.addNewOrder(this.order).subscribe(
      (data)=>{
        console.log(data)
      if(data)
        alert("Order added!")
      },
      (error)=>{
        console.log(error)
      }
    )

  }
  gohome()
  {
    this.rtr.navigate(["dashboard"]);
  }

}
