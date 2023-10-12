import { Injectable } from '@angular/core';
import { Administrado } from '../../interface/ASA/administrado';
import { RespuestaServicio } from '../../interface/ASA/respuesta-service.model';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministradoService {

  private static readonly DELAY = 1000;

  private administradoList: Administrado[] = [
    { id: 1, codigo: 'ADM23-00001', nombre: 'Administrado 1' },
    { id: 2, codigo: 'ADM23-00002', nombre: 'Administrado 2' },
    { id: 3, codigo: 'ADM23-00003', nombre: 'Administrado 3' },
    { id: 4, codigo: 'ADM23-00004', nombre: 'Administrado 4' },
    { id: 5, codigo: 'ADM23-00005', nombre: 'Administrado 5' },
    { id: 6, codigo: 'ADM23-00006', nombre: 'Administrado 6' },
    { id: 7, codigo: 'ADM23-00007', nombre: 'Administrado 7' },
    { id: 8, codigo: 'ADM23-00008', nombre: 'Administrado 8' },
    { id: 9, codigo: 'ADM23-00009', nombre: 'Administrado 9' },
    { id: 10, codigo: 'ADM23-00010', nombre: 'Administrado 10' },
    { id: 11, codigo: 'ADM23-00011', nombre: 'Administrado 11' },
    { id: 12, codigo: 'ADM23-00012', nombre: 'Administrado 12' },
    { id: 13, codigo: 'ADM23-00013', nombre: 'Administrado 13' },
    { id: 14, codigo: 'ADM23-00014', nombre: 'Administrado 14' },
    { id: 15, codigo: 'ADM23-00015', nombre: 'Administrado 15' },
    { id: 16, codigo: 'ADM23-00016', nombre: 'Administrado 16' },
    { id: 17, codigo: 'ADM23-00017', nombre: 'Administrado 17' },
    { id: 18, codigo: 'ADM23-00018', nombre: 'Administrado 18' },
    { id: 19, codigo: 'ADM23-00019', nombre: 'Administrado 19' },
    { id: 20, codigo: 'ADM23-00020', nombre: 'Administrado 20' }
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
