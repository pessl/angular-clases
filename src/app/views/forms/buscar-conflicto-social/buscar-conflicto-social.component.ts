import { Component, OnInit, ViewChild } from '@angular/core';
import { ConflictoSocial } from '../../../interface/ASA/conflictoSocial';
import { MatTableDataSource } from '@angular/material/table';
import { RespuestaServicio } from 'src/app/interface/ASA/respuesta-service.model';
import { MatDialogRef } from '@angular/material/dialog';
import { ConflictoSocialService } from '../../../services/ASA/conflicto-social.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-buscar-conflicto-social',
  templateUrl: './buscar-conflicto-social.component.html',
  styleUrls: ['./buscar-conflicto-social.component.scss'
  ]
})
export class BuscarConflictoSocialComponent implements OnInit {

  listaDeConflictoSocial!: ConflictoSocial[];

  textoABuscar: string = '';
  columnasAMostrar: string[] = [
    // 'id',
    'codigo',
    'rotulo',
    'accion'
  ];

  dataSource!: MatTableDataSource<ConflictoSocial>;
  tamanioPagina: number = 5;

  esperandoDatos = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: ConflictoSocialService,
    private dialogRef: MatDialogRef<BuscarConflictoSocialComponent>
  ) { }

  ngOnInit() {
    this.service.obtenerListaDeConflictoSocial()
      .subscribe((respuesta: RespuestaServicio<ConflictoSocial[]>) => {
        this.esperandoDatos = false;

        if (respuesta.codResultado === '0') {
          this.listaDeConflictoSocial = respuesta.response;
          this.dataSource = new MatTableDataSource(this.listaDeConflictoSocial);
          setTimeout(() => { this.dataSource.paginator = this.paginator; });
        } else {
        }
      });
  }

  buscarEnTabla() {
    if (this.textoABuscar) {
      this.dataSource.filter = this.textoABuscar.trim().toLowerCase();
    } else {
      this.dataSource.filter = '';
    }
  }

  seleccionarConflictoSocial(conflictoSocial: ConflictoSocial) {
    this.dialogRef.close(conflictoSocial);
  }
}
