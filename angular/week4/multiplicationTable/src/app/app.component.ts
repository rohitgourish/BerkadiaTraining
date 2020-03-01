import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public number:number
  
  public loadComponent:boolean = false;

  loadChildComponent(){
    this.loadComponent = true;
  }
}
