import { ContextoSolicitudAsaService, TipoAcompaniamiento } from './../../../services/ASA/contexto-solicitud-asa.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { Administrado } from 'src/app/interface/ASA/administrado.model';
import { BuscarAdministradoComponent } from '../buscar-administrado/buscar-administrado.component';
import { BuscarConflictoSocialComponent } from '../buscar-conflicto-social/buscar-conflicto-social.component';
import { BuscarUnidadFiscalizableComponent } from '../buscar-unidad-fiscalizable/buscar-unidad-fiscalizable.component';
import { ConflictoSocial } from 'src/app/interface/ASA/conflicto-social.model';
import { UnidadFiscalizable } from 'src/app/interface/ASA/unidad-fiscalizable.model';

@Component({
  selector: 'app-registrar-solicitud-asa',
  templateUrl: './registrar-solicitud-asa.component.html',
  styleUrls: ['./registrar-solicitud-asa.component.scss']
})
export class RegistrarSolicitudAsaComponent {

  listaDeAdministrados: Administrado[] = [];
  listaDeUnidadFiscalizable: UnidadFiscalizable[] = [];
  conflictoSocial!: ConflictoSocial;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private contexto: ContextoSolicitudAsaService) {
      this.contexto.limpiar();
  }

  openDialogAdm(): void {
    const dialogRef = this.dialog.open(BuscarAdministradoComponent);
    dialogRef.afterClosed().subscribe((administrado: Administrado) => {
      if (administrado) {
        this.listaDeAdministrados.push(administrado);
      }
    });
  }

  openDialogUF(): void {
    const dialogRef = this.dialog.open(BuscarUnidadFiscalizableComponent);
    dialogRef.afterClosed().subscribe((unidadFiscalizable: UnidadFiscalizable) => {
      if (unidadFiscalizable) {
        this.listaDeUnidadFiscalizable.push(unidadFiscalizable);
      }
    });
  }

  openDialogCS(): void {
    const dialogRef = this.dialog.open(BuscarConflictoSocialComponent);
    dialogRef.afterClosed().subscribe((conflictoSocial: ConflictoSocial) => {
      if (conflictoSocial) {
        this.conflictoSocial = conflictoSocial;
      }
    });
  }

  removerAdministrado(administrado: Administrado) {
    this.listaDeAdministrados.splice(this.listaDeAdministrados.indexOf(administrado), 1);
  }

  removerUnidadFiscalizable(unidadaFiscalizable: UnidadFiscalizable) {
    this.listaDeUnidadFiscalizable.splice(this.listaDeAdministrados.indexOf(unidadaFiscalizable), 1);
  }

  respuestaSolicitud() {
    this.router.navigate(['/forms/correo-respuesta-asa']);
  }

  setearTipoDeAcompanamiento(valor: string) {
    switch (valor) {
      case 'EAT':
        this.contexto.tipoAcompanamiento = TipoAcompaniamiento.EAT;
        break;
      case 'EAC':
        this.contexto.tipoAcompanamiento = TipoAcompaniamiento.EAC;
        break;
      case 'SOPORTE_PARTICIPACION':
        this.contexto.tipoAcompanamiento = TipoAcompaniamiento.SOPORTE_PARTICIPACION;
        break;
      default:
        this.contexto.tipoAcompanamiento = undefined;
        break;
    }
  }

  setearAceptaSolicitud(valor: boolean) {
    this.contexto.aceptaSolicitud = valor;
  }
}
