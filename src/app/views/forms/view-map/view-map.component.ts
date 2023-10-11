import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker} from 'mapbox-gl';
import { PlacesService } from 'src/app/services/places.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss']
})
export class ViewMapComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placeService: PlacesService, private mapService: MapService){

  }

  ngAfterViewInit(): void{
    if(!this.placeService.useLocation) throw Error('No hay PlacesService.userLocation');

    console.log("Ubicacion:",this.placeService.useLocation);
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placeService.useLocation,
      zoom: 2, // starting zoom
      });

      const popup = new Popup()
      .setHTML(`
      <div class="card">
      <div class="card-header style="background-color: #3388ff;color: white;">
      Aqui estoy
      </div>
      <br>
      <div class="card-body">
      <span> Tu ubicación se carga de manera automatica </span>
      </div>
      </div> 
      `);
      new Marker({color: 'red'})
      .setLngLat( this.placeService.useLocation )
      .setPopup( popup )
      .addTo( map )

      this.mapService.setMap( map );
  }

}
