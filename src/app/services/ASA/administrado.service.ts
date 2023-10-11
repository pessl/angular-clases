import { Injectable } from '@angular/core';
import { Administrado } from '../../interface/ASA/administrado';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradoService {

  private administradoList: Administrado[] = [
    {id:1, codigo:"ADM21-003760", nombre:"Administrado 1"},
    {id:2, codigo:"ADM21-003800", nombre:"Administrado 2"}
  ]

  constructor(private httpClient: HttpClient) { }

  getAdministradoList(): Observable<Administrado[]>{
    return of(this.administradoList);
  }
}
