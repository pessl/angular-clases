import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-documentos-eat',
  templateUrl: './documentos-eat.component.html',
  styles: [
  ]
})
export class DocumentosEatComponent implements OnInit {

  @Input() tabsArray: string[]=['Anexo 1', 'Anexo 2', 'Anexo 3', 'Anexo 4'];

  activatedTab: number = 0;

  constructor() {}

  ngOnInit(): void{}

  setTab(index:number){
    this.activatedTab = index;
  }
}
