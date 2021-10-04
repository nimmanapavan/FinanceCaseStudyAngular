import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-showallproducts',
  templateUrl: './showallproducts.component.html',
  styleUrls: ['./showallproducts.component.css']
})
export class ShowallproductsComponent implements OnInit {

  constructor(private pser:ProductService,private rtr:Router) { }
  products:any;

  ngOnInit(): void {
    this.pser.getallProducts().subscribe(
      (data)=>{
        console.log(data);
        this.products=data;
        console.log(this.products);
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }

  deleteproduct(prod_id:any)
  {
    console.log(prod_id);
    this.pser.deteteProduct(prod_id).subscribe(
      (data)=>{
        console.log(data);
        if(data)
          alert("Product deleted");
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }
  showallusers()
  {
    this.rtr.navigate(["showallusers"]);
  }
  userstoapprove()
  {
    this.rtr.navigate(["userstoapprove"]);
  }
  addproducts()
  {
    this.rtr.navigate(["addproducts"]);
  }
  gotodashboard()
  {
    this.rtr.navigate(['']);
  }

}
