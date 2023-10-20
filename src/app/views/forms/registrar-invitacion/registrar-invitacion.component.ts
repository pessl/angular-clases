import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-invitacion',
  templateUrl: './registrar-invitacion.component.html',
  styleUrls: ['./registrar-invitacion.component.scss'
  ]
})
export class RegistrarInvitacionComponent {

  constructor(
    private router: Router
  ){}

  siguiente() {
    this.router.navigate(['/forms/pertinencia-participacion']);
  }
}
