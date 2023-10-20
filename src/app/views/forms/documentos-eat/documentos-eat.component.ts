import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos-eat',
  templateUrl: './documentos-eat.component.html',
  styleUrls: ['./documentos-eat.component.scss'
  ]
})
export class DocumentosEatComponent implements OnInit {

  @Input() tabsArray: string[]=['Anexo 1', 'Anexo 2', 'Anexo 3', 'Anexo 4'];

  activatedTab: number = 0;

  constructor(private router: Router){}

  ngOnInit(): void{}

  setTab(index:number){
    this.activatedTab = index;
  }

  generarReporte(){
    this.router.navigate(['/forms/reporte-asa']);
  }
}
