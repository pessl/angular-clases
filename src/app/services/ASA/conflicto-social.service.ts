import { Injectable } from '@angular/core';
import { ConflictoSocial } from '../../interface/ASA/conflictoSocial';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';
import { RespuestaServicio } from 'src/app/interface/ASA/respuesta-service.model';

@Injectable({
  providedIn: 'root'
})
export class ConflictoSocialService {

  private static readonly DELAY = 1000;

  private conflictoSocialList: ConflictoSocial[] = [
    { id: 1, codigo: 'ADM23-00001', rotulo: 'Conflicto Social 1' },
    { id: 2, codigo: 'ADM23-00002', rotulo: 'Conflicto Social 2' },
    { id: 3, codigo: 'ADM23-00003', rotulo: 'Conflicto Social 3' },
    { id: 4, codigo: 'ADM23-00004', rotulo: 'Conflicto Social 4' },
    { id: 5, codigo: 'ADM23-00005', rotulo: 'Conflicto Social 5' },
    { id: 6, codigo: 'ADM23-00006', rotulo: 'Conflicto Social 6' },
    { id: 7, codigo: 'ADM23-00007', rotulo: 'Conflicto Social 7' },
    { id: 8, codigo: 'ADM23-00008', rotulo: 'Conflicto Social 8' },
    { id: 9, codigo: 'ADM23-00009', rotulo: 'Conflicto Social 9' },
    { id: 10, codigo: 'ADM23-00010', rotulo: 'Conflicto Social 10' },
    { id: 11, codigo: 'ADM23-00011', rotulo: 'Conflicto Social 11' },
    { id: 12, codigo: 'ADM23-00012', rotulo: 'Conflicto Social 12' },
    { id: 13, codigo: 'ADM23-00013', rotulo: 'Conflicto Social 13' },
    { id: 14, codigo: 'ADM23-00014', rotulo: 'Conflicto Social 14' },
    { id: 15, codigo: 'ADM23-00015', rotulo: 'Conflicto Social 15' },
    { id: 16, codigo: 'ADM23-00016', rotulo: 'Conflicto Social 16' },
    { id: 17, codigo: 'ADM23-00017', rotulo: 'Conflicto Social 17' },
    { id: 18, codigo: 'ADM23-00018', rotulo: 'Conflicto Social 18' },
    { id: 19, codigo: 'ADM23-00019', rotulo: 'Conflicto Social 19' },
    { id: 20, codigo: 'ADM23-00020', rotulo: 'Conflicto Social 20' }
  ];

  constructor(private httpClient: HttpClient) {
  }

  obtenerListaDeConflictoSocial(): Observable<RespuestaServicio<ConflictoSocial[]>> {
    return of({
      response: this.conflictoSocialList,
      msgResultado: '',
      codResultado: '0'
    }).pipe(delay(ConflictoSocialService.DELAY));
  }
}
