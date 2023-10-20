import { Component, OnInit, ViewChild } from '@angular/core';
import { UnidadFiscalizable } from '../../../interface/ASA/unidad-fiscalizable.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef } from '@angular/material/dialog';
import { RespuestaServicio } from 'src/app/interface/ASA/respuesta-service.model';
import { UnidadFiscalizableService } from '../../../services/ASA/unidad-fiscalizable.service';

@Component({
  selector: 'app-buscar-unidad-fiscalizable',
  templateUrl: './buscar-unidad-fiscalizable.component.html',
  styleUrls: ['./buscar-unidad-fiscalizable.component.scss'
  ]
})
export class BuscarUnidadFiscalizableComponent implements OnInit {

  listaDeUnidadFiscalizable!: UnidadFiscalizable[];

  textoABuscar: string = '';
  columnasAMostrar: string[] = [
    // 'id',
    'codigo',
    'nombre',
    'accion'
  ];

  dataSource!: MatTableDataSource<UnidadFiscalizable>;
  tamanioPagina: number = 5;

  esperandoDatos = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: UnidadFiscalizableService,
    private dialogRef: MatDialogRef<BuscarUnidadFiscalizableComponent>
  ) { }

  ngOnInit() {
    this.service.obtenerListaDeUnidadFiscalizable()
      .subscribe((respuesta: RespuestaServicio<UnidadFiscalizable[]>) => {
        this.esperandoDatos = false;

        if (respuesta.codResultado === '0') {
          this.listaDeUnidadFiscalizable = respuesta.response;
          this.dataSource = new MatTableDataSource(this.listaDeUnidadFiscalizable);
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

  seleccionarUnidadFiscalizable(unidadFiscalizable: UnidadFiscalizable) {
    this.dialogRef.close(unidadFiscalizable);
  }
}
