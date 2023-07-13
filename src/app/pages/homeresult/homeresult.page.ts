import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeresult',
  templateUrl: './homeresult.page.html',
  styleUrls: ['./homeresult.page.scss'],
})
export class HomeresultPage implements OnInit {
  x: any;
  y: any;
  tmpparam: any;
  constructor(public ar: ActivatedRoute) { }

  ngOnInit() {
    //this.x  = this.ar.snapshot.paramMap.get('uname');
    //this.y  = this.ar.snapshot.paramMap.get('upwd');
    this.tmpparam = this.ar.snapshot.paramMap.get('fataobj');
    let getobj = JSON.parse(this.tmpparam);
    this.x = getobj["getname"];
    this.y = getobj["getpwd"];
    console.log("X=",this.x);
    console.log(getobj);
  }

}
