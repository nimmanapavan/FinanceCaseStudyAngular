import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseurl="http://localhost:8088/fms";
  
  constructor(private http:HttpClient) { }
  cardtype:any;
  newuser=new Users();
  user_id:string=''
  userobj = new Users();
  
  searchByUserId(userid:string){
    this.http.get(this.baseurl+"/users/"+userid).subscribe(
      (data)=>{
        this.userobj = data as Users;
        console.log("user from db"+JSON.stringify(this.userobj));
      },
      (error)=>{
        console.log(error);
      }
    )  
    return this.userobj;
  }

  setuserIdAnduserObj(uid:string , uobj:Users){
    console.log("set uid and uobj called");
    this.user_id = uid;
    this.userobj = uobj;
  }

  getuserId(){
    console.log("get user id called "+this.user_id);
    return this.user_id;
  }

  getuserApprovalStatus(){
    console.log("in get approval status "+JSON.stringify(this.userobj))
    console.log(this.userobj.approval_status?.match("yes") === null);
    if(this.userobj.approval_status?.match("yes") === null){
      console.log("if called");
      return false;
    }
    else{
      console.log("else called");
      return true;
    }
  }

  getallUsers()
  {
    return this.http.get(this.baseurl+"/users");
  }
  getuserstoapprove()
  {
    return this.http.get(this.baseurl+"/users/not approved");
  }
  getusersbyid(uid:string)
  {
    return this.http.get(this.baseurl+"/users/"+uid);
  }

  updateUser(user:Users)
  {
    return this.http.put(this.baseurl+"/users",user);
  }

  addUser(user:Users)
  {
    return this.http.post(this.baseurl+"/users",user);
  }

  getalluserid()
  {
    return this.http.get(this.baseurl+"/alluserid");
  }

  getallpincodes()
  {
    return this.http.get(this.baseurl+"/allpincodes");
  }

  getallifsc()
  {
    return this.http.get(this.baseurl+"/allifsc");
  }

}
