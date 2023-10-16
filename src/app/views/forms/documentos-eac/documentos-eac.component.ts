import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos-eac',
  templateUrl: './documentos-eac.component.html',
  styleUrls: ['./documentos-eac.component.scss'
  ]
})
export class DocumentosEacComponent {

  @Input() tabsArray: string[]=['Anexo 1', 'Anexo 2', 'Anexo 3', 'Anexo 4', 'Anexo 5', 'Anexo 6'];

  activatedTab: number = 0;

  constructor(private router: Router){}

  setTab(index:number){
    this.activatedTab = index;
  }

  generarReporte(){
    this.router.navigate(['/forms/reporte-asa']);
  }

}
