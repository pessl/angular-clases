import { Injectable } from '@angular/core';
import {LngLatLike, Map, Marker, Popup} from 'mapbox-gl';
import { Feature } from '../interface/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  private markers: Marker[] = [];

  get isMapReady(){
    return !!this.map;
  }

 setMap(map: Map){
 this.map = map;
 }
 flyTo(coords: LngLatLike){
  if(!this.isMapReady) throw Error('El mapa no esta inicializado');
  this.map?.flyTo({
    zoom: 14,
    center: coords,

  });
 }

 createMarkersFromPLaces(places: Feature[]){
 if(!this.map) throw Error('Mapa no inicializado');

 this.markers.forEach(marker => marker.remove());

 const newMarkrs = [];

 for(const place of places){
const [lng, lat] = place.center;
const popup = new Popup()
    .setHTML(
      `<div class="card">
      <div class="card-header style="background-color: #3388ff;color: white;">
      ${ place.text } 
      </div>
      <br>
      <div class="card-body">
      <span> ${ place.place_name } </span>
      </div>
      </div>          
      `);
      const newMarker = new Marker()
      .setLngLat([lng,lat])
      .setPopup( popup )
      .addTo( this.map );

      newMarkrs.push( newMarker );
 }

   this.markers = newMarkrs;
 }

}
