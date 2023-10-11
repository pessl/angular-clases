import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documentos-eac',
  templateUrl: './documentos-eac.component.html',
  styles: [
  ]
})
export class DocumentosEacComponent {

  @Input() tabsArray: string[]=['Anexo 1', 'Anexo 2', 'Anexo 3', 'Anexo 4', 'Anexo 5', 'Anexo 6'];

  activatedTab: number = 0;

  setTab(index:number){
    this.activatedTab = index;
  }
}
