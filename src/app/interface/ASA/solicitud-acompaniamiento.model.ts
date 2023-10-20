export interface SolicitudAcompaniamiento {
  id: number;
  fechaInicio: string;
  fechaFin: string;
  areaSolicitante: number;
  tipoAcompaniamiento: number;
  tipoActividad: number;
  subsector: number;
  ubigeo: number;
  asunto: string;
  descripcion: string;
  escenarioGlobal: string;
  conflictoSocial: number;
  condicion: number;
}
