import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAngular';

  constructor(){
    console.log('chargement app')
  }

  appel(){
    alert("clicked from app")
  }
}
