import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 title:string = "hello je suis Jamel"
  constructor(){
    console.log('chargement home')
  }

  ngOnInit() {
  }

  appel(){
    alert("clicked from home")
  }
}
