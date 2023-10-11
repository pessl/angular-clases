import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;

  constructor(private placesServices: PlacesService){

  }
 //controla el input: Cada vez que deje de escribir, pasara un segundo y se ejecuta la instrucción
  onQueryChanged(query: string=''){
  console.log("valor de query", query);
if(this.debounceTimer) clearTimeout(this.debounceTimer);
this.debounceTimer = setTimeout(() => {
  console.log("mandar el query", query);
  this.placesServices.getPlacesByQuery(query);
}, 500); 

  }

}
