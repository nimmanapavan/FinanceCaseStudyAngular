import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-processingfee',
  templateUrl: './processingfee.component.html',
  styleUrls: ['./processingfee.component.css']
})
export class ProcessingfeeComponent implements OnInit {

  payment_options = ["NetBanking","card"]
  banks = ["SBI","ICICI","AXIS","HDFC","YESBANK"]
  payment_type = '';
  bank = '';
  bankname:string = 'select';
  prodid:string='';
  prodobj:Products;
  constructor(private activeRoute:ActivatedRoute,private pservice:ProductService,private route:Router) {
    this.prodobj = new Products();
   }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.prodid = params.get("prod_id") as string;
        console.log(this.prodid)
      }
    )
    this.pservice.searchProductById(this.prodid).subscribe(
      (data)=>{
        this.prodobj = data as Products;
        console.log("processing fee comp prod obj"+this.prodobj);
      }
    )
  }
}
