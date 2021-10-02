import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  prodid:string=""
  prodobj:Products
  period=[3,6,12]
  emiperiod:number=0
  emiAmount:number=0
  payButtonStatus : boolean = false;
  last_emi_period : number = 0;

  user_approval_status:string='';

  uid:string = '';
  
  constructor(private uservice:UsersService,  private oservice:OrdersService, private activeRoute:ActivatedRoute , private pservice:ProductService , private route:Router) { 
    this.prodobj = new Products()
  }

  async ngOnInit(): Promise<void> {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.prodid = params.get("prod_id") as string;
        console.log(this.prodid)
      }
    )
    await this.pservice.searchProductById(this.prodid).subscribe(
      (data)=>{
        console.log(data);
        this.prodobj = data as Products;
        console.log(this.prodobj);
        //this.payButtonStatus = this.oservice.helpergetLastTransaction("user002" , this.prodid);
        console.log(this.uservice.getuserApprovalStatus());
        if(this.uservice.getuserApprovalStatus()){
          this.payButtonStatus = false;
          console.log("after approval "+this.payButtonStatus);
        }
        else{
          this.payButtonStatus = true;
          console.log("after approval "+this.payButtonStatus);
        }
        this.uid = "sad";
        console.log(this.uid);
        this.oservice.helpergetLastTransaction(this.uservice.getuserId() , this.prodid); //this.uservice.getuserId()
 
      }
    )

    //this.oservice.helpergetLastTransaction(this.uservice.getuserId() , this.prodid); //this.uservice.getuserId()
 
    //this.disablebutton();
    //this.payButtonStatus = this.oservice.getPayButtonStatus()
    //console.log("pservice pay status "+this.payButtonStatus);
  }

  getEMI(){
    this.emiAmount = this.pservice.getEMIamount(this.emiperiod , this.prodobj.price);
    this.payButtonStatus = this.oservice.getPayButtonStatus()
    console.log("pservice pay status "+this.payButtonStatus);
  }

  /*
  disablebutton(){
    alert("disable called")
    this.payButtonStatus = this.oservice.getPayButtonStatus()
    console.log("pservice pay status "+this.payButtonStatus);
  }
*/
}
