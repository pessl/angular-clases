import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-bandeja-eval-sa',
  templateUrl: './bandeja-eval-sa.component.html',
  styles: [
  ],
  
})
export class BandejaEvalSaComponent implements OnInit {
 

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





