import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-processingfee',
  templateUrl: './processingfee.component.html',
  styleUrls: ['./processingfee.component.css']
})
export class ProcessingfeeComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }
  prod_id:any;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      params=>{
        this.prod_id = params.get("prod_id") as string;
        console.log(this.prod_id)
      }
    )
  }

}
