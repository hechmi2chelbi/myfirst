import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[CrudService]
})
export class AjoutComponent implements OnInit {
title:string
product_type:string
description:string
price:string
  constructor(private http:HttpClient,private route:Router,private crud:CrudService) { }

  ngOnInit() {
  }

  save(){
    let data={
      'title':this.title,
      'price':this.price,
      'description':this.description,
      'product_type':this.product_type
    }
    this.crud.addNew(data).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/']);
    },
    error=>{alert(JSON.stringify(error));
    })
    // this.http.post('http://localhost:3000/produits',data).subscribe(res=>{
    //   console.log(res);
    //   this.route.navigate(['/']);
    // },
    // error=>{alert(JSON.stringify(error));
    // })

  }

}
