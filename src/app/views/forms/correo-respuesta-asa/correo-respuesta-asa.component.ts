import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContextoSolicitudASAService, TipoAcompanamiento } from 'src/app/services/ASA/contexto-solicitud-asa.service';

@Component({
  selector: 'app-correo-respuesta-asa',
  templateUrl: './correo-respuesta-asa.component.html',
  styleUrls: ['./correo-respuesta-asa.component.scss'
  ]
})
export class CorreoRespuestaAsaComponent {

  constructor(
    private router: Router,
    private contexto: ContextoSolicitudASAService) {
  }

  irASiguiente() {
    if (this.contexto.aceptaSolicitud) {
      const tipoAcompanamiento = this.contexto.tipoAcompanamiento;
      if (tipoAcompanamiento) {
        switch (tipoAcompanamiento) {
          case TipoAcompanamiento.EAT:
            this.router.navigate(['/forms/documentos-eat']);
            break;
          case TipoAcompanamiento.EAC:
            this.router.navigate(['/forms/documentos-eac']);
            break;
          case TipoAcompanamiento.SOPORTE_PARTICIPACION:
            this.router.navigate(['/forms/reporte-participacion-asa']);
            break;
        }
      } else {
        // ERROR: el tipo de acompañamiento tuvo que ser seteado anteriormente
      }
    } else {
      this.router.navigate(['/forms']);
    }
  }

}
