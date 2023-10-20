import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pertinencia-participacion',
  templateUrl: './pertinencia-participacion.component.html',
  styleUrls: ['./pertinencia-participacion.component.scss'
  ]
})
export class PertinenciaParticipacionComponent {

  constructor(
    private router: Router
  ){}

  siguiente() {
    this.router.navigate(['/forms/informacion-sustentatoria']);
  }
}
