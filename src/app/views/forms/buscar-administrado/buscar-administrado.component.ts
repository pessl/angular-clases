import { Component, Input, OnInit } from '@angular/core';
import { Administrado } from '../../../interface/ASA/administrado';
import { AdministradoService } from '../../../services/ASA/administrado.service';

@Component({
  selector: 'app-buscar-administrado',
  templateUrl: './buscar-administrado.component.html',
  styles: [
  ]
})
export class BuscarAdministradoComponent implements OnInit {

  administradoList: Administrado[] = [];

  constructor(
    private service: AdministradoService
  ){ }

  ngOnInit(){
    this.service.getAdministradoList().subscribe(response => {
      this.administradoList = response
    })
  }
}
