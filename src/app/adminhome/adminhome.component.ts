import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit(): void {
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
