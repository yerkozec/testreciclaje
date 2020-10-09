import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {delay} from 'rxjs/operators';
import { datosplasticos, deposito_metales, contenedor } from '../datosapi/datosapi.models';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  api_path_plasticos = 'http://104.198.56.154:3000/datosplasticos';

  constructor(
    public http: HttpClient
  ) { }

  doAgregarPlastico(datosplasticos: datosplasticos): Observable<any>{
    return this.http.post<any>(this.api_path_plasticos,datosplasticos)
  } 
  doVerPlastico(): Observable <datosplasticos[]> {
    return this.http.get<datosplasticos[]>(this.api_path_plasticos).pipe();
  }

  doUpdatePlastico(id, item): Observable<datosplasticos> {
    return this.http.put<datosplasticos>(this.api_path_plasticos + '/' + id, JSON.stringify(item)).pipe()
  }

  doEliminarPlasticos(datosplasticos:number):Observable<any>{
    return this.http.delete<datosplasticos[]>("http://104.198.56.154:3000/datosplasticos/" + datosplasticos)
  }

  doVerMetal(): Observable <deposito_metales[]> {
    return this.http.get<deposito_metales[]>("http://35.193.42.58:3000/deposito_metales")
  }
  doVerVidrio(): Observable <contenedor[]> {
    return this.http.get<contenedor[]>("http://34.70.52.240:3000/containers")
  }

  
}