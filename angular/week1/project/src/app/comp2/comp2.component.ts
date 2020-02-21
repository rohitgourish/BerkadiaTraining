import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  images = ["../../assets/images/four.jpg","../../assets/images/five.jpg","../../assets/images/six.jpg"];
  names = ["SUPERMAN","SHAZAM","AQUAMAN"];
  
  constructor() { }

  ngOnInit() {
  }

}
