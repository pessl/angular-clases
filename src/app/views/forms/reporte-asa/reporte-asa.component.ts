import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-asa',
  templateUrl: './reporte-asa.component.html',
  styleUrls: ['./reporte-asa.component.scss'
  ]
})
export class ReporteAsaComponent {

  constructor(private router: Router){}

  aprobarInforme(){
    this.router.navigate(['/forms/aprobar-informe-asa']);
  }
}
