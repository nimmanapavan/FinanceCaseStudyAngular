import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private pservice:ProductService,private rtr:Router,private uService:UsersService) { }
  Products:any;
  username=this.uService.getuserId();
  ngOnInit(): void {
    this.pservice.getallProducts().subscribe(
      (data)=>{
        console.log(data);
        this.Products=data;
        console.log(this.Products);
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }

  gotohome()
  {
    this.rtr.navigate(['dashboard']);
  }

  updateuser()
  {
    this.rtr.navigate(['updateuser']);
  }
}
