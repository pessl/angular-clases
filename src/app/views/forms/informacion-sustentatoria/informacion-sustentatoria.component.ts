import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion-sustentatoria',
  templateUrl: './informacion-sustentatoria.component.html',
  styleUrls: ['./informacion-sustentatoria.component.scss'
  ]
})
export class InformacionSustentatoriaComponent {

  @Input() tabsArray: string[]=['Ayuda de Memoria', 'Infografía', 'Guía de Participación'];

  activatedTab: number = 0;

  constructor(private router: Router){}

  setTab(index:number){
    this.activatedTab = index;
  }

  siguiente() {
    this.router.navigate(['/forms/reporte-participacion-reuniones-previas']);
  }
}
