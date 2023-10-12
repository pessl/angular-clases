import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarAdministradoComponent } from '../buscar-administrado/buscar-administrado.component';
import { Administrado } from 'src/app/interface/ASA/administrado';

@Component({
  selector: 'app-registrar-solicitud-asa',
  templateUrl: './registrar-solicitud-asa.component.html',
  styles: [
  ]
})
export class RegistrarSolicitudAsaComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BuscarAdministradoComponent);
    dialogRef.afterClosed().subscribe((administrado: Administrado) => {
      // TODO(bean)
    });
  }

}
