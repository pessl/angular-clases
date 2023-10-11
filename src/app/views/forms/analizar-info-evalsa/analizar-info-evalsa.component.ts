import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ApiResponse } from "src/app/interface/postfilter.interface";
import { postService } from "src/app/services/post.service";
import { ModalRegevalsaComponent } from 'src/app/views/modal/modal-regevalsa/modal-regevalsa.component';

interface Data {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

@Component({
  selector: 'app-analizar-info-evalsa',
  templateUrl: './analizar-info-evalsa.component.html',
  styleUrls: ['./analizar-info-evalsa.component.scss']
})
export class AnalizarInfoEvalsaComponent {
  datos: any = [];  
  filterPost!: string;
  p: number = 1;
  public formregister: FormGroup = new FormGroup({});

  constructor(private service: postService, private modalService: NgbModal, private router: Router,){

  }

  filterData(data: Data[], searchText: string): Data[] {
    if (!searchText) {
      return data;
    }
  
    searchText = searchText.toLowerCase();
    var key: string;
    return data.filter(item => {
      if (typeof item === 'object' && item !== null) {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const field = item.id || item.employee_age || item.employee_name || item.employee_salary;
            if (typeof field === 'string' && field.toLowerCase().includes(searchText)) {
              return true; // Encuentra una coincidencia en uno de los campos
            }
          }
        }
      }
      return false; // No se encontraron coincidencias en ningún campo o item no es un objeto válido
    });
  }

  ngOnInit(){

    this.service.getDatos().subscribe(response => {
      this.datos = response.data; 
      console.log("Datos de servicio", this.datos);
    });
  }

  //Funcion para buscar fechas aleatoreas
  getRandomDate(): Date{
    const starDate = new Date(2000, 1, 1);
    const endDate = new Date();
    return new Date(Math.random() * (endDate.getTime() - starDate.getTime()));
    };
  
    iniformregister(): void {
      this.formregister = new FormGroup({
       
      });
    };
  
    openModal() {
      const modalOptions: NgbModalOptions = {
        
        windowClass: 'custom-modal',
      };
      const modalRef = this.modalService.open(ModalRegevalsaComponent);
      
    }
  
    newregistro() {
      this.router.navigate(['/forms/listar-bandeja-eval']);
    }



}
