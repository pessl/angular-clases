import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { RegisternewinfoComponent } from './registernewinfo/registernewinfo.component';
import { BandejaEvalSaComponent } from './bandeja-eval-sa/bandeja-eval-sa.component';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AprobacionEvalsaComponent } from './aprobacion-evalsa/aprobacion-evalsa.component';
import { AnalizarInfoEvalsaComponent } from './analizar-info-evalsa/analizar-info-evalsa.component';
import { NewRegisterInfoEcComponent } from './new-register-info-ec/new-register-info-ec.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MonitoreodemediosComponent } from './monitoreodemedios/monitoreodemedios.component';
import { InformacionareasoefaComponent } from './informacionareasoefa/informacionareasoefa.component';
import { EntidadespublicasprivadasComponent } from './entidadespublicasprivadas/entidadespublicasprivadas.component';
import { AcompanamientosocialComponent } from './acompanamientosocial/acompanamientosocial.component';
import { ActoressocialesComponent } from './actoressociales/actoressociales.component';
import { MapaUiComponent } from './mapa-ui/mapa-ui.component';
import { RegistraraprobarinfoEvalSAComponent } from './registraraprobarinfo-eval-sa/registraraprobarinfo-eval-sa.component';
import { ApromonitoreomediosComponent } from './apromonitoreomedios/apromonitoreomedios.component';
import { AproinformacionareaoefaComponent } from './aproinformacionareaoefa/aproinformacionareaoefa.component';
import { AproentipublicasprivadasComponent } from './aproentipublicasprivadas/aproentipublicasprivadas.component';
import { AprosocioambientalComponent } from './aprosocioambiental/aprosocioambiental.component';
import { AproactoressocialesComponent } from './aproactoressociales/aproactoressociales.component';
import { LoadingMapComponent } from './loading-map/loading-map.component';
import { ViewMapComponent } from './view-map/view-map.component';
import { BtnMyLacationComponent } from './btn-my-lacation/btn-my-lacation.component';
import { MapoefalogoComponent } from './mapoefalogo/mapoefalogo.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegistrarSolicitudAsaComponent } from './registrar-solicitud-asa/registrar-solicitud-asa.component';
import { CorreoRespuestaAsaComponent } from './correo-respuesta-asa/correo-respuesta-asa.component';
import { DocumentosEatComponent } from './documentos-eat/documentos-eat.component';
import { DocumentosEacComponent } from './documentos-eac/documentos-eac.component';
import { ReporteParticipacionAsaComponent } from './reporte-participacion-asa/reporte-participacion-asa.component';
import { ReporteAsaComponent } from './reporte-asa/reporte-asa.component';
import { AprobarInformeAsaComponent } from './aprobar-informe-asa/aprobar-informe-asa.component';
import { DocumentosEatAnexo1Component } from './documentos-eat-anexo1/documentos-eat-anexo1.component';
import { DocumentosEatAnexo2Component } from './documentos-eat-anexo2/documentos-eat-anexo2.component';
import { DocumentosEatAnexo3Component } from './documentos-eat-anexo3/documentos-eat-anexo3.component';
import { DocumentosEatAnexo4Component } from './documentos-eat-anexo4/documentos-eat-anexo4.component';
import { DocumentosEacAnexo1Component } from './documentos-eac-anexo1/documentos-eac-anexo1.component';
import { DocumentosEacAnexo2Component } from './documentos-eac-anexo2/documentos-eac-anexo2.component';
import { DocumentosEacAnexo3Component } from './documentos-eac-anexo3/documentos-eac-anexo3.component';
import { DocumentosEacAnexo4Component } from './documentos-eac-anexo4/documentos-eac-anexo4.component';
import { DocumentosEacAnexo5Component } from './documentos-eac-anexo5/documentos-eac-anexo5.component';
import { DocumentosEacAnexo6Component } from './documentos-eac-anexo6/documentos-eac-anexo6.component';
import { BuscarAdministradoComponent } from './buscar-administrado/buscar-administrado.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FloatingLabelsComponent,
    RegisternewinfoComponent,
    FilterPipe,
    AprobacionEvalsaComponent,
    AnalizarInfoEvalsaComponent,
    BandejaEvalSaComponent,
    MonitoreodemediosComponent,
    InformacionareasoefaComponent,
    EntidadespublicasprivadasComponent,
    AcompanamientosocialComponent,
    ActoressocialesComponent,
    MapaUiComponent,
    RegistraraprobarinfoEvalSAComponent,
    ApromonitoreomediosComponent,
    AproinformacionareaoefaComponent,
    AproentipublicasprivadasComponent,
    AprosocioambientalComponent,
    AproactoressocialesComponent,
    LoadingMapComponent,
    ViewMapComponent,
    BtnMyLacationComponent,
    MapoefalogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
    RegistrarSolicitudAsaComponent,
    CorreoRespuestaAsaComponent,
    DocumentosEatComponent,
    DocumentosEacComponent,
    ReporteParticipacionAsaComponent,
    ReporteAsaComponent,
    AprobarInformeAsaComponent,
    DocumentosEatAnexo1Component,
    DocumentosEatAnexo2Component,
    DocumentosEatAnexo3Component,
    DocumentosEatAnexo4Component,
    DocumentosEacAnexo1Component,
    DocumentosEacAnexo2Component,
    DocumentosEacAnexo3Component,
    DocumentosEacAnexo4Component,
    DocumentosEacAnexo5Component,
    DocumentosEacAnexo6Component,
    BuscarAdministradoComponent,

  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule,
    MatChipsModule,
    MatDialogModule,
    NgxPaginationModule,
    FontAwesomeModule,

    MatSelectModule,
    MatFormFieldModule,
    NewRegisterInfoEcComponent
  ]
})
export class CoreUIFormsModule {
}
