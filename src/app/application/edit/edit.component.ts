import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../entities/produit.entity';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[CrudService]
})
export class EditComponent implements OnInit {
  idproduit:any;
  produit:Produit = new Produit();
  constructor(private route:ActivatedRoute,private http:HttpClient,private re:Router,private crud:CrudService) {
    this.route.params.subscribe(res=>{
      this.idproduit = res['id'];
    })
   }

  ngOnInit() {
    this.crud.getById(this.idproduit).subscribe(res=>{
      this.produit = <Produit>res;
    })
    // this.http.get('http://localhost:3000/produit/'+this.idproduit).subscribe(res=>{
    //   this.produit = <Produit>res;
    // })
  }

  save(){
    this.crud.updateById(this.idproduit,this.produit).subscribe(res=>{
      this.re.navigate(['/'])  
    })
  //   this.http.put('http://localhost:3000/produit/'+this.idproduit,this.produit).subscribe(res=>{
  //   this.re.navigate(['/'])  
  // })
  }

}
