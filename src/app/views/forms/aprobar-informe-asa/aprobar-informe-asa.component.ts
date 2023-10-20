import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprobar-informe-asa',
  templateUrl: './aprobar-informe-asa.component.html',
  styleUrls: ['./aprobar-informe-asa.component.scss'
  ]
})
export class AprobarInformeAsaComponent {

  constructor(private router: Router){}

  aprobarInforme(){
    this.router.navigate(['/charts']);
  }
}
