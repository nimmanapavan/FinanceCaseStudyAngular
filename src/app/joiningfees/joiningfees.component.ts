import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-joiningfees',
  templateUrl: './joiningfees.component.html',
  styleUrls: ['./joiningfees.component.css']
})
export class JoiningfeesComponent implements OnInit {
  joiningfees:any;
  payment_options = ["NetBanking","card"]
  banks = ["SBI","ICICI","AXIS","HDFC","YESBANK"]
  payment_type = '';
  bank = '';
  bankname:string = 'select';
  prodid:string='';
  prodobj:Products;
  constructor(private activeRoute:ActivatedRoute,private rtr:Router,private pservice:ProductService,private route:Router,private uService:UsersService) {
    this.prodobj = new Products();
   }
   registeruser()
   {
     this.uService.addUser(this.uService.newuser).subscribe(
      (data)=>{
        alert("user registered")
      }
     )
     this.rtr.navigate(['loginpage']);
   }

  ngOnInit(): void {
    if(this.uService.cardtype=="gold")
    {
      this.joiningfees=200;
    }
    else if(this.uService.cardtype=="titanium")
    {
      this.joiningfees=500;
    }
  }
}

