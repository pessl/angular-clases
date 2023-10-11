import { Component } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-btn-my-lacation',
  templateUrl: './btn-my-lacation.component.html',
  styleUrls: ['./btn-my-lacation.component.scss']
})
export class BtnMyLacationComponent {

  constructor(private mapService: MapService, private placesService:PlacesService){

  }
//boton regresar a ubicacion inicial
  goToMyLocation(){
    console.log("Ir a mi ubicacion");

    if(!this.placesService.isuserLocationReady ) throw Error('No hay ubicación de usuario');
    if(!this.mapService.isMapReady ) throw Error('No se a inicializado el mapa');
    this.mapService.flyTo(this.placesService.useLocation!)
  }

}
