import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-showallusers',
  templateUrl: './showallusers.component.html',
  styleUrls: ['./showallusers.component.css']
})
export class ShowallusersComponent implements OnInit {

  constructor(private user:UsersService,private rtr:Router) {
   }
  usersarray:any;
  ngOnInit(): void {
    this.user.getallUsers().subscribe(
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
  showallproducts()
  {
    this.rtr.navigate(["showallproducts"]);
  }
  gotodashboard()
  {
    this.rtr.navigate(['']);
  }
}
