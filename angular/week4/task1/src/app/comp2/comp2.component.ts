import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  // arrayData:string[] = [];
  
  @Input('child') public data:[];

  @Output() sendBack = new EventEmitter();


  constructor() {

   }

  ngOnInit():void {
  }

  delete(id){
      console.log(id);
      this.sendBack.emit(id);
    }

}
