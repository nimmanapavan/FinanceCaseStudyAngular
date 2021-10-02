import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl="http://localhost:8088/fms";
  constructor(private http:HttpClient) { 
    this.prodobj=new Products();
  }

  prodobj:Products;
  emi_period:number=0;
  payButton:boolean = false;
  time_days :number = 0;
  
  getallProducts()
  {
    return this.http.get(this.baseurl+"/products");
  }

  addNewProduct(product:Products)
  {
    return this.http.post(this.baseurl+"/products",product);
  }

  searchProductById(pid: any)
  {
    return this.http.get(this.baseurl+"/products/"+pid);
  }

  deteteProduct(pid:string)
  {
    return this.http.delete(this.baseurl+"/products/"+pid);
  }

  getSingleProduct(){
    return this.http.get(this.baseurl+"/oneproduct");
  }

  upload(formData:FormData)
  {
    return this.http.post(this.baseurl+"/prodimg",formData.get("prod_img"));
  }

  getEMIamount(emiperiod:number , price:number){
    this.emi_period = emiperiod;
    return price/emiperiod;
   }

   setTimeinDays(days:number){
    this.time_days = days;
  }
}
