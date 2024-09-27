import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //url da api
  private url:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  // Método de seleção
  select():Observable<Client[]>{
    return this.http.get<Client[]>(this.url)
  }

  // Método para cadastrar clientes
  create(obj:Client):Observable<Client>{
    return this.http.post<Client>(this.url, obj);
  }

  // Método para editar clientes
  update(obj:Client):Observable<Client>{
    return this.http.put<Client>(this.url, obj);
  }

  // Método para remover cliente
  delete(id:number):Observable<void>{
      return this.http.delete<void>(this.url + '/' + id);
  }
}
