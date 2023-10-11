import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registraraprobarinfo-eval-sa',
  templateUrl: './registraraprobarinfo-eval-sa.component.html',
  styleUrls: ['./registraraprobarinfo-eval-sa.component.scss']
})
export class RegistraraprobarinfoEvalSAComponent {

  opcionSeleccionada:any = "0";

  constructor(private router: Router,){

  }
  ngOnInit(){
  
  }
    iniformregister(): void {
     
    }
  
    retornar(){
      this.router.navigate(['/forms/registernewinfo']);
    }


}
