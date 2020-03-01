import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public data:number;
  
  counter:number[]=[];  //to store the numbers from 1 to 10

  constructor() {
    for(var i = 1;i<=10;i++)
      this.counter.push(i);
   }

  ngOnInit() {
  }

}
