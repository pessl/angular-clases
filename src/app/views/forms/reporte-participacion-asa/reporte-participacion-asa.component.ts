import { Component } from '@angular/core';
import { Actor } from '../../../interface/ASA/actor';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
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

  generarReporte(){
    this.router.navigate(['/forms/reporte-asa']);
  }
}
