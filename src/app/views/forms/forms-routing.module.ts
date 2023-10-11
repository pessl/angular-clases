import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { RegisternewinfoComponent } from './registernewinfo/registernewinfo.component';
import { BandejaEvalSaComponent } from './bandeja-eval-sa/bandeja-eval-sa.component';
import { AprobacionEvalsaComponent } from './aprobacion-evalsa/aprobacion-evalsa.component';
import { AnalizarInfoEvalsaComponent } from './analizar-info-evalsa/analizar-info-evalsa.component';
import { NewRegisterInfoEcComponent } from './new-register-info-ec/new-register-info-ec.component';
import { RegistraraprobarinfoEvalSAComponent } from './registraraprobarinfo-eval-sa/registraraprobarinfo-eval-sa.component';
import { MapaUiComponent } from './mapa-ui/mapa-ui.component';
import { RegistrarSolicitudAsaComponent } from './registrar-solicitud-asa/registrar-solicitud-asa.component';
import { DocumentosEatComponent } from './documentos-eat/documentos-eat.component';
import { DocumentosEacComponent } from './documentos-eac/documentos-eac.component';
import { ReporteParticipacionAsaComponent } from './reporte-participacion-asa/reporte-participacion-asa.component';
import { ReporteAsaComponent } from './reporte-asa/reporte-asa.component';
import { AprobarInformeAsaComponent } from './aprobar-informe-asa/aprobar-informe-asa.component';
import { CorreoRespuestaAsaComponent } from './correo-respuesta-asa/correo-respuesta-asa.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'form-control'
      },
      {
        path: 'floating-labels',
        component: FloatingLabelsComponent,
        data: {
          title: 'Floating Labels'
        }
      },

      {
        path: 'registernewinfo',
        component:RegisternewinfoComponent,
        data: {
          title: 'Registrar Información'
        }
      },
      {
        path: 'Registrar',
        component:BandejaEvalSaComponent,
        data: {
          title: 'Registrar'
        }
      },
      {
        path: 'Registrar-aprobar',
        component:RegistraraprobarinfoEvalSAComponent,
        data: {
          title: 'Registrar / Aprobar'
        }
      },
      {
        path: 'arpobacion-esa',
        component:AprobacionEvalsaComponent,
        data: {
          title: 'Aprobación'
        }
      },
      {
        path: 'geolocalizacion',
        component:MapaUiComponent,
        data: {
          title: 'Geolocalozación'
        }
      },
      {
        path: 'analizar-info-evalsa',
        component:AnalizarInfoEvalsaComponent,
        data: {
          title: 'Analizar Información'
        }
      },
      {
        path: 'registrar-informacion',
        component:NewRegisterInfoEcComponent,
        data: {
          title: 'Registrar Información'
        }
      },
      // PROCESO ACOMPAÑAMIENTO SOCIOAMBIENTAL
      // =====================================
      {
        path: 'registrar-solicitud-asa',
        component:RegistrarSolicitudAsaComponent,
        data: {
          title: 'Registrar Solicitud de Acompañamiento'
        }
      },
      {
        path: 'correo-respuesta-asa',
        component:CorreoRespuestaAsaComponent,
        data: {
          title: 'Respuesta Solicitud Acompañamiento'
        }
      },
      {
        path: 'documentos-eat',
        component:DocumentosEatComponent,
        data: {
          title: 'Generar Documentos EAT'
        }
      },
      {
        path: 'documentos-eac',
        component:DocumentosEacComponent,
        data: {
          title: 'Generar Documentos EAC'
        }
      },
      {
        path: 'reporte-participacion-asa',
        component:ReporteParticipacionAsaComponent,
        data: {
          title: 'Reporte de Participación'
        }
      },
      {
        path: 'reporte-asa',
        component:ReporteAsaComponent,
        data: {
          title: 'Reporte de Acompañamiento SA'
        }
      },
      {
        path: 'aprobar-informe-asa',
        component:AprobarInformeAsaComponent,
        data: {
          title: 'Aprobacion de Informe ASA'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
