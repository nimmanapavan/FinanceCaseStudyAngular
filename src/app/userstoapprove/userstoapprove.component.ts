import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userstoapprove',
  templateUrl: './userstoapprove.component.html',
  styleUrls: ['./userstoapprove.component.css']
})
export class UserstoapproveComponent implements OnInit {

  constructor(private user:UsersService,private rtr:Router) { 
  }
  usersarray:any;
  ngOnInit(): void {
    this.user.getuserstoapprove().subscribe(
      (data)=>{
        console.log(data);
        this.usersarray=data;
        console.log(this.usersarray);
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }
  usr:any;
  approveuser(user_id:any,card_no:any)
  {
    console.log(user_id+card_no)
    this.user.getusersbyid(user_id).subscribe(
      (data)=>{
        // console.log(data);
        this.usr=data as Users;
        // console.log(this.usr);
        this.usr.card_no=card_no;
        this.usr.approval_status="yes";
        this.user.updateUser(this.usr).subscribe(
          (data)=>{
          console.log(data);
          if(data)
            alert("User approved");
          },
          (error)=>
          {
             console.log(error);
          }
        );
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
  addproducts()
  {
    this.rtr.navigate(["addproducts"]);
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
