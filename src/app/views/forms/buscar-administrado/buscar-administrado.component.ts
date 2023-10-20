import { Component, OnInit, ViewChild } from '@angular/core';
import { Administrado } from '../../../interface/ASA/administrado.model';
import { RespuestaServicio } from '../../../interface/ASA/respuesta-service.model';
import { AdministradoService } from '../../../services/ASA/administrado.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buscar-administrado',
  templateUrl: './buscar-administrado.component.html',
  styleUrls: ['./buscar-administrado.component.scss'],
})
export class BuscarAdministradoComponent implements OnInit {

  listaDeAdministrados!: Administrado[];

  textoABuscar: string = '';
  columnasAMostrar: string[] = [
    // 'id',
    'codigo',
    'nombre',
    'accion'
  ];

  dataSource!: MatTableDataSource<Administrado>;
  tamanioPagina: number = 5;

  esperandoDatos = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: AdministradoService,
    private dialogRef: MatDialogRef<BuscarAdministradoComponent>
  ) { }

  ngOnInit() {
    this.service.obtenerListaDeAdministrados()
      .subscribe((respuesta: RespuestaServicio<Administrado[]>) => {
        this.esperandoDatos = false;

        if (respuesta.codResultado === '0') {
          this.listaDeAdministrados = respuesta.response;
          this.dataSource = new MatTableDataSource(this.listaDeAdministrados);
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

  seleccionarAdministrado(administrado: Administrado) {
    this.dialogRef.close(administrado);
  }
}
