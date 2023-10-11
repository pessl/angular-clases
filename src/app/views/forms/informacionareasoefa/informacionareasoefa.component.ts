import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { informacionareaoefaI } from 'src/app/interface/gestionsocioambiental.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacionareasoefa',
  templateUrl: './informacionareasoefa.component.html',
  styleUrls: ['./informacionareasoefa.component.scss']
})
export class InformacionareasoefaComponent {
  //opcionSeleccionada: any = "0"
  public formLogin!:FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,){

  }


  get selectiareavalido(){
    return this.formLogin!.get('selectiarea')?.invalid && this.formLogin!.get('selectiarea')?.touched;
  }
 /* get selectiarea() {
    return this.formLogin.get('selectiarea');
  }*/
  get asuntoiareavalido(){
    return this.formLogin!.get('asuntoiarea')?.invalid && this.formLogin!.get('asuntoiarea')?.touched;
  }
  get descripcioniareavalido(){
    return this.formLogin!.get('descripcioniarea')?.invalid && this.formLogin!.get('descripcioniarea')?.touched;
  }
  get escenarioSiareavalido(){
    return this.formLogin!.get('escenarioSiarea')?.invalid && this.formLogin!.get('escenarioSiarea')?.touched;
  }
  get shearcsaiareavalido(){
    return this.formLogin!.get('shearcsaiarea')?.invalid && this.formLogin!.get('shearcsaiarea')?.touched;
  }
  get motivoiareavalido(){
    return this.formLogin!.get('motivoiarea')?.invalid && this.formLogin!.get('motivoiarea')?.touched;
  }
 

  ngOnInit(): void{
    this.formLogin = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.formBuilder.group({
      selectiarea: ["0", [Validators.required]],
      asuntoiarea: ['', [Validators.required,]],
      descripcioniarea: ['',[Validators.required,]],
      escenarioSiarea: ['', [Validators.required,]],
      shearcsaiarea: ['', [Validators.required,]],
      motivoiarea: ['',[Validators.required,]]
    })
  }

  public get f(): any{
    return this.formLogin?.controls;
  } 


  validateSelectArea(control: AbstractControl): { [key: string]: any } | null {
    const selectedValue = control.value;
    if (selectedValue === '0') {
      return { 'invalidSelect': true };
    }
    return null;
  }

  public send(form: informacionareaoefaI) {
    console.log("Datos capturados", form);
    
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',              
    });
      this.router.navigate(['charts']);
    }



}
