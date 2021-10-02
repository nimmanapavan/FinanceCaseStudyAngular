import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private pservice:ProductService,private rtr:Router) { }
  Products:any;
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
}
