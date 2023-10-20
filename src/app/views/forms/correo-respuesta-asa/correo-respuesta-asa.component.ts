import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContextoSolicitudAsaService, TipoAcompaniamiento } from 'src/app/services/ASA/contexto-solicitud-asa.service';

@Component({
  selector: 'app-correo-respuesta-asa',
  templateUrl: './correo-respuesta-asa.component.html',
  styleUrls: ['./correo-respuesta-asa.component.scss'
  ]
})
export class CorreoRespuestaAsaComponent {
  constructor(
    private router: Router,
    private contexto: ContextoSolicitudAsaService) {
  }

  irASiguiente() {
    if (this.contexto.aceptaSolicitud) {
      const tipoAcompaniamiento = this.contexto.tipoAcompanamiento;
      if (tipoAcompaniamiento) {
        switch (tipoAcompaniamiento) {
          case TipoAcompaniamiento.EAT:
            this.router.navigate(['/forms/documentos-eat']);
            break;
          case TipoAcompaniamiento.EAC:
            this.router.navigate(['/forms/documentos-eac']);
            break;
          case TipoAcompaniamiento.SOPORTE_PARTICIPACION:
            this.router.navigate(['/forms/reporte-participacion-asa']);
            break;
        }
      } else {
        // ERROR: el tipo de acompañamiento tuvo que ser seteado anteriormente
      }
    } else {
      this.router.navigate(['/charts']);
    }
  }
}
