import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private pser:ProductService,private http:HttpClient,private rtr:Router) {
    this.product=new Products();
   }

  ngOnInit(): void {
  }
  product:Products;
  prod_img:any;
  prod_id:any;
  onChange(event:any) {
    this.prod_img = event.target.files[0];
    // console.log(this.prod_img);
    let formData:FormData=new FormData();
    formData.append('prod_img', this.prod_img);
    this.pser.upload(formData).subscribe(
      (data)=>{
        alert(JSON.stringify(data));
      }
    );
    console.log(formData.get("prod_img"));
}
  addProduct(productForm:any)
  {
    this.product=productForm.value;
    this.prod_id=this.product.prod_id;
    
    

    
    this.pser.addNewProduct(this.product).subscribe
    (
      (data)=>
      {
        console.log(data);
        if(data)
          alert("Product added");
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
  showallproducts()
  {
    this.rtr.navigate(["showallproducts"]);
  }
  gotodashboard()
  {
    this.rtr.navigate(['']);
  }

}
