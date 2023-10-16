import { Injectable } from '@angular/core';
import { UnidadFiscalizable } from '../../interface/ASA/unidadFiscalizable';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { RespuestaServicio } from 'src/app/interface/ASA/respuesta-service.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadFiscalizableService {

  private static readonly DELAY = 1000;

  private unidadFiscalizableList: UnidadFiscalizable[] = [
    { id: 1, codigo: 'UF0013A881', nombre: 'Estacion de trasvase de concentrado' },
    { id: 2, codigo: 'UF0005572', nombre: 'Bahia de Paita' },
    { id: 3, codigo: 'UF0013468', nombre: 'ZONA INDUSTRIAL II COMPLEMENTARIA' },
  ];

  constructor(private httpClient: HttpClient) {
  }

  obtenerListaDeUnidadFiscalizable(): Observable<RespuestaServicio<UnidadFiscalizable[]>> {
    return of({
      response: this.unidadFiscalizableList,
      msgResultado: '',
      codResultado: '0'
    }).pipe(delay(UnidadFiscalizableService.DELAY));
  }
}
