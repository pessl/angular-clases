import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuscarAdministradoComponent } from '../buscar-administrado/buscar-administrado.component';

@Component({
  selector: 'app-registrar-solicitud-asa',
  templateUrl: './registrar-solicitud-asa.component.html',
  styles: [
  ]
})
export class RegistrarSolicitudAsaComponent {

  constructor(public dialog:MatDialog){}

  openDialog():void {
    const dialogRef = this.dialog.open(BuscarAdministradoComponent,{
      height: '50%',
      width: '50%',
      data: {}
    });
  }

}
