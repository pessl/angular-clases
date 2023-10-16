import { Injectable } from '@angular/core';

export enum TipoAcompanamiento {
  EAT = 'Evaluación Ambiental Temprana',
  EAC = 'Evaluación Ambiental de Casualidad',
  SOPORTE_PARTICIPACION = 'Soporte de Participación'
};

@Injectable({
  providedIn: 'root'
})
export class ContextoSolicitudASAService {

  private tipoDeAcompanamiento: TipoAcompanamiento | undefined;

  constructor() { }

  set tipoAcompanamiento(value: TipoAcompanamiento) {
    this.tipoAcompanamiento = value;
  }

  get tipoAcompanamiento() {
    return this.tipoAcompanamiento;
  }

  limpiar() { this.tipoDeAcompanamiento = undefined; }
}
