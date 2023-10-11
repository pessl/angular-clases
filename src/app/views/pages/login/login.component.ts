import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/interface/login.interface';
import {AutenticacionService} from 'src/app/services/autenticacion.service'

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
public formLogin!:FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private api:AutenticacionService ) { }


get usernamevalido(){
  return this.formLogin.get('username')?.invalid && this.formLogin.get('username')?.touched;
}
get passwordvalido(){
  return this.formLogin.get('password')?.invalid && this.formLogin.get('password')?.touched;
}

  
  
  ngOnInit(): void{
    
    this.formLogin = this.createMyForm();

  // this.loadApi();
  }
  public get f(): any{
    return this.formLogin.controls;
  } 

  private createMyForm():FormGroup {
    return this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(5)]],
       password:['',[Validators.required, Validators.minLength(5)]],
       terms:['',Validators.required]
     });
 }
  
 /* loadApi(){
    const response = {
      username: 'hcarrillo',
      password: '123456',
      terms: true,
    };
    this.formLogin.patchValue(response);
  }*/
  
  
 public send(form: LoginI) {
  console.log("Datos capturados", form);
  
  Swal.fire({
    icon: 'success',
    title: 'Bienvenido',              
  });
    this.router.navigate(['charts']);
  }

  clean(){
    this.formLogin.reset();
  }

}
