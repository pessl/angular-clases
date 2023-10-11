import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
@Component({
  selector: 'app-mapa-ui',
  templateUrl: './mapa-ui.component.html',
  styleUrls: ['./mapa-ui.component.scss']
})
export class MapaUiComponent {

constructor(private placesService: PlacesService){

}

get isUserLocationReady(){
  return this.placesService.isuserLocationReady;
}
  

}
