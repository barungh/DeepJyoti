import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myClass:string = '';
  
  onButtonClick() {
    if (this.myClass === '') {
      this.myClass = 'is-active';
    } else {
      this.myClass = '';
    }
  }
}
