import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  count = 0;
  title = "valeur saisir";
  nom:string;
  email:string;
  phone:string;
  about:string;
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() { }

  ngOnInit() {
  }
  func(){
    alert(this.title)
  }
  increment(){
    this.count++;
  
  }
  decrement(){
    this.count--;
  }
test():boolean{
  if(this.nom == 'jamel' && this.phone=='123') {
    return true;
  }
  return false;
  
}
  save(){
    let data={
      "nom":this.nom,
      "phone":this.phone,
      "email":this.email,
      "about":this.about,
    }
    console.log(data)
  }

}
