import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[CrudService]
})
export class DashboardComponent implements OnInit {
  reponseApi : any = [];
  constructor(private http:HttpClient,private route:Router,private crud:CrudService) { }

  ngOnInit() {
    this.getAll()
  }
  /**
   * get all produits
   */
  getAll(){
    this.crud.getAll().subscribe(res=>{
      this.reponseApi = res;
      console.log(res);
    })
    // this.http.get('http://localhost:3000/produits').subscribe(res=>{
    //   this.reponseApi = res;
    //   console.log(res);
    // })
  }

  edit(produit){
    this.route.navigate(['/edit',produit._id])
  }

  remove(produit){
    this.crud.removeById(produit._id).subscribe(res=>{
      console.log(res);
      this.getAll();
    })
    // this.http.delete('http://localhost:3000/produit/'+produit._id).subscribe(res=>{
    //   console.log(res);
    //   this.getAll();
    // })

  }

}
