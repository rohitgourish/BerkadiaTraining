import { Component } from '@angular/core';

interface TypeData{
  id:number,
  names:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = '';
  counter:number = 1
  arrayData:TypeData[]= [];

  contactSelected(event){
    this.message = event;
    this.arrayData.push({
    id:this.counter,
    names:this.message
    });
    this.counter++;
    this.message = ''
    this.number++;
    
  }

  number:number = 0;

  delete(event){
    if(confirm("Are you sure you want to delete?")){
      this.arrayData = this.arrayData.filter(todos => todos.id !== event);
      this.number--;
    } else{

    }
    
  }
}
