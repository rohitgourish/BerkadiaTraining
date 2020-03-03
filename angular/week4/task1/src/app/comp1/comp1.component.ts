import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  @Output() childData = new EventEmitter();

  firstName:string = '';
  lastName:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.childData.emit(this.firstName+' '+this.lastName);
    this.firstName = '';
    this.lastName = '';
  }
  
  checkButton(){
    if(this.firstName==='' || this.lastName===''){
      return true;
    } else{
      return false;
    }
  }
}
