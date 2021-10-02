import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    UserName:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
    
  });
  subform(){
    // this.profileForm.controls.firstName.setValue('shushil');
    if(this.NAME1 == "admin" && this.NAME2 == "admin"){
      alert("success");
          }
          else{
      alert("Invalid Login");
          }
      this.rtr.navigate(["adminhome"]);
  } 

  NAME1:string ='';
  NAME2:string ='';

}
