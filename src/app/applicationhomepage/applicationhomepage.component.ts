import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-applicationhomepage',
  templateUrl: './applicationhomepage.component.html',
  styleUrls: ['./applicationhomepage.component.css']
})
export class ApplicationhomepageComponent implements OnInit {

  constructor(private rtr:Router,private pservice:ProductService) { }


  gotologin()
  {
    this.rtr.navigate(['loginpage']);
  }

  ngOnInit(): void {
    this.pservice.getSingleProduct().subscribe(
      (data)=>{
        console.log(data);
        this.Products=data as Products;
        console.log(this.Products);
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }
  Products:any
}
