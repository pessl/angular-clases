import { Injectable } from '@angular/core';

export enum TipoAcompaniamiento {
  EAT = 'Evaluación Ambiental Temprana',
  EAC = 'Evaluación Ambiental de Casualidad',
  SOPORTE_PARTICIPACION = 'Soporte de Participación'
};

@Injectable({
  providedIn: 'root'
})
export class ContextoSolicitudAsaService {

  private tipoAcompaniamiento_ : TipoAcompaniamiento | undefined;
  private aceptaSolicitud_ = true;

  constructor() { }

  set tipoAcompanamiento(value: TipoAcompaniamiento | undefined) {
    this.tipoAcompaniamiento_ = value;
  }

  get tipoAcompanamiento(): TipoAcompaniamiento | undefined {
    return this.tipoAcompaniamiento_;
  }

  set aceptaSolicitud(value: boolean) {
    this.aceptaSolicitud_ = value;
  }

  get aceptaSolicitud() { return this.aceptaSolicitud_; }

  limpiar() {
    this.tipoAcompaniamiento_ = undefined;
    this.aceptaSolicitud_ = false;
  }
}
