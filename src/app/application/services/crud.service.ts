import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  api = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.api+'produits');
  }
  getById(id){
    return this.http.get(this.api+'produit/'+id);
  }
  addNew(data){
    return this.http.post(this.api+'produits',data);
  }
  updateById(id,data){
    return this.http.put(this.api+'produit/'+id,data);
  }
  removeById(id){
    return this.http.delete(this.api+'produit/'+id);
  }


}
