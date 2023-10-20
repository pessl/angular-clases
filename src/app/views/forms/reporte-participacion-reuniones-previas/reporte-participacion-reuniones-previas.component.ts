import { Component } from '@angular/core';
import { RegistroActorComponent } from '../registro-actor/registro-actor.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Actor } from 'src/app/interface/ASA/actor.model';

@Component({
  selector: 'app-reporte-participacion-reuniones-previas',
  templateUrl: './reporte-participacion-reuniones-previas.component.html',
  styleUrls: ['./reporte-participacion-reuniones-previas.component.scss'
  ]
})
export class ReporteParticipacionReunionesPreviasComponent {

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
    this.router.navigate(['/forms/acta-participacion']);
  }
}
