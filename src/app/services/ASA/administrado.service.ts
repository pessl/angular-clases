import { Injectable } from '@angular/core';
import { Administrado } from '../../interface/ASA/administrado.model';
import { RespuestaServicio } from '../../interface/ASA/respuesta-service.model';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradoService {

  private static readonly DELAY = 1000;

  private administradoList: Administrado[] = [
    { id: 1, codigo: 'ADM23-00001', nombre: 'GRIFO LUCELINA' },
    { id: 2, codigo: 'ADM23-00002', nombre: 'SERVICIOS DIESEL EXPRESS' },
    { id: 3, codigo: 'ADM23-00003', nombre: 'A&G TRANSPORTE Y COMERCIALIZACION SRL' },
  ];

  constructor(private httpClient: HttpClient) {
  }

  obtenerListaDeAdministrados(): Observable<RespuestaServicio<Administrado[]>> {
    return of({
      response: this.administradoList,
      msgResultado: '',
      codResultado: '0'
    }).pipe(delay(AdministradoService.DELAY));
  }
}
