import { Component } from '@angular/core';
import { Feature } from 'src/app/interface/places';
import { MapService } from 'src/app/services/map.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  public selectdId: string = '';
  constructor(private placesServices:PlacesService, private mapService: MapService ){

  }

  get isLoadingPlaces(): boolean {
    return this.placesServices.isLoadingPlaces;
  }
  get places(): Feature[] {
    return this.placesServices.places;
  }
  flyTo(place:Feature){
    this.selectdId=place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }

}
