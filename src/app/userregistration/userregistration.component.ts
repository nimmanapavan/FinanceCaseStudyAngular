import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  constructor(public dp:DatePipe,private userv:UsersService,private rtr:Router) { 
    this.user=new Users();
  }

  ngOnInit(): void {
  }
  userids:any;
  pincodes:any;
  ifscs:any;
  u=0;
  p=0;
  i=0;
  user:Users;
  date=this.dp.transform(new Date(),'yyyy-MM-dd');;
  addUser(userForm:any)
  {
    this.userids=new Array<string>();
    this.pincodes=new Array<string>();
    this.ifscs=new Array<string>();
    this.user=userForm.value;
    this.user.card_no="0";
    this.user.approval_status="no";
    this.user.date_of_registration=this.date;
    console.log(this.user);

    this.userv.getalluserid().subscribe(
      (data)=>{
        this.userids=data as String;
        console.log(this.userids);
        if(this.userids.includes(this.user.user_id)||this.user.user_id=="")
        {
          this.u=1;
          return;
        }
      }
    );

    this.userv.getallpincodes().subscribe(
      (data)=>{
        this.pincodes=data as String;
        console.log(this.pincodes);
        if(!this.pincodes.includes(this.user.pincode))
        {
          this.p=1;
          return;
        }
      }
    );

    this.userv.getallifsc().subscribe(
      (data)=>{
        this.ifscs=data as String;
        console.log(this.ifscs);
        if(!this.ifscs.includes(this.user.ifsc))
        {
          this.i=1;
          return;
        }
      }
    );
    
    this.userv.addUser(this.user).subscribe();
    this.rtr.navigate(['loginpage']);


  }

}
