import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addUser',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.css']
})
export class AddUserComponent implements OnInit {

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
