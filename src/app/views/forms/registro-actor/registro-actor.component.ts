import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Actor } from 'src/app/interface/ASA/actor.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-actor',
  templateUrl: './registro-actor.component.html',
  styleUrls: ['./registro-actor.component.scss'
  ]
})
export class RegistroActorComponent implements OnInit {

  formularioActor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RegistroActorComponent>
  ) {
    this.formularioActor = this.formBuilder.group({
      nombres:[],
      apellidos:[],
      comunidad:[],
      cargo:[],
      correo:[],
      telefono:[],
      departamento:[],
      provincia:[],
      distrito:[]
    });
  }

  ngOnInit(){
  }

  guardar(){
    const formDatos = this.formularioActor?.value;
    const actor: Actor = {... formDatos};
    this.dialogRef.close(actor);
  }
}
