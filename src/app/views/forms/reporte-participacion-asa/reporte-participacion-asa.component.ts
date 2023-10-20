import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';

import { Actor } from '../../../interface/ASA/actor.model';
import { RegistroActorComponent } from '../registro-actor/registro-actor.component';


@Component({
  selector: 'app-reporte-participacion-asa',
  templateUrl: './reporte-participacion-asa.component.html',
  styleUrls: ['./reporte-participacion-asa.component.scss'
  ]
})
export class ReporteParticipacionAsaComponent {

  listaDeActores: Actor[] = [];

  constructor(public dialog: MatDialog, private router: Router){}

  openDialogAc(): void {
    const dialogRef = this.dialog.open(RegistroActorComponent);
    dialogRef.afterClosed().subscribe((actor: Actor) => {
      if (actor) {
        this.listaDeActores.push(actor);
      }
    });
  }

  removerActor(actor: Actor) {
    this.listaDeActores.splice(this.listaDeActores.indexOf(actor), 1);
  }

  generarReporte(){
    this.router.navigate(['/forms/reporte-asa']);
  }
}
