import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { monitoreomediosI } from 'src/app/interface/gestionsocioambiental.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monitoreodemedios',
  templateUrl: './monitoreodemedios.component.html',
  styleUrls: ['./monitoreodemedios.component.scss']
})
export class MonitoreodemediosComponent  {

  public formLogin?:FormGroup;
  imageSrc: string = '';
  errorMessage: string = '';
  maxDate!: string;
  constructor(private router: Router, private formBuilder: FormBuilder,)
  {
    const currentDate = new Date();
    this.maxDate = this.formatDate(currentDate);
  }
  @ViewChild('linkInput') linkInput!: ElementRef;

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Añade ceros iniciales si es necesario
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }




  get fregistrommvalido(){
    return this.formLogin!.get('fregistromm')?.invalid && this.formLogin!.get('fregistromm')?.touched;
  }
  get titulommvalido(){
    return this.formLogin!.get('titulomm')?.invalid && this.formLogin!.get('titulomm')?.touched;
  }
  get fuentesmmvalido(){
    return this.formLogin!.get('fuentesmm')?.invalid && this.formLogin!.get('fuentesmm')?.touched;
  }
  get linkurlmmvalido(){
    return this.formLogin!.get('linkurlmm')?.invalid && this.formLogin!.get('linkurlmm')?.touched;
  }
  get resumenmmvalido(){
    return this.formLogin!.get('resumenmm')?.invalid && this.formLogin!.get('resumenmm')?.touched;
  }
  get shearbmmvalido(){
    return this.formLogin!.get('shearbmm')?.invalid && this.formLogin!.get('shearbmm')?.touched;
  }
  get motivommvalido(){
    return this.formLogin!.get('motivomm')?.invalid && this.formLogin!.get('motivomm')?.touched;
  }

  ngOnInit(): void{
    this.formLogin = this.createMyForm();
  }

  public get f(): any{
    return this.formLogin?.controls;
  } 

  private createMyForm():FormGroup{
    return this.formBuilder.group({
      fregistromm: ['',[Validators.required,]],
      titulomm: ['', [Validators.required,]],
      fuentesmm: ['', [Validators.required,]],
      linkurlmm: ['', [Validators.required,]],
      resumenmm: ['', [Validators.required,]],
      shearbmm: ['', [Validators.required,]],
      motivomm: ['', [Validators.required,]],
    });
  }

  onLinkChange() {
    const linkValue = this.linkInput.nativeElement.value;

    const img = new Image();

    img.onload = () => {
      this.imageSrc = linkValue;
      this.errorMessage = ''; 
    };

    img.onerror = () => {
      this.errorMessage = 'La URL proporcionada no es una imagen válida.';
      this.imageSrc = '';
    };

    img.src = linkValue;
  }

  public send(form: monitoreomediosI) {
    console.log("Datos capturados", form);
    
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',              
    });
      this.router.navigate(['charts']);
    }

}
