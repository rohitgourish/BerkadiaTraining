import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {

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
