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

  private tipoAcompanamiento_: TipoAcompanamiento | undefined;
  private aceptaSolicitud_ = true;

  constructor() { }

  set tipoAcompanamiento(value: TipoAcompanamiento | undefined) {
    this.tipoAcompanamiento_ = value;
  }

  get tipoAcompanamiento(): TipoAcompanamiento | undefined {
    return this.tipoAcompanamiento_;
  }

  set aceptaSolicitud(value: boolean) {
    this.aceptaSolicitud_ = value;
  }

  get aceptaSolicitud() { return this.aceptaSolicitud_; }

  limpiar() {
    this.tipoAcompanamiento_ = undefined;
    this.aceptaSolicitud_ = false;
  }
}
