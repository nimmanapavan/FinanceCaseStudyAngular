import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userid:string='';
  userobj = new Users();
  uname:string = '';
  pswd : string='';
  redirectingPage:string='';

  constructor(private activeRoute:ActivatedRoute , private uservice:UsersService , private route:Router) { }

  ngOnInit(): void {
  }

  validateuser(ulform:any){
    this.uname = (<HTMLInputElement>document.getElementById("uname")).value;
    this.pswd = (<HTMLInputElement>document.getElementById("pswd")).value;
    this.userobj = this.uservice.searchByUserId(this.uname);
    console.log("checking null "+this.userobj != null);
    if(this.userobj != null){
      this.uservice.setuserIdAnduserObj(this.uname , this.userobj);
      if(this.pswd != this.userobj.password){
        alert("Wrong Password");
      }
      else{
        this.route.navigate(["dashboard"]);
      }
    }
    else{
      alert("User does not exist");
    }
  }

}