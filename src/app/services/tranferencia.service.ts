import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get tranferecias(){
    return this.listaTransferencia;
  }

  // todas(): Observable<Transferencia[]>{
  //   return this.httpClient.get<Transferencia[]>(this.url);
  // }

  adicionar(transferencia: any){
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

}
