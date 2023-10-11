import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reject } from 'lodash-es';
import { PlacesApiClient } from 'src/app/api/placesApiClient';
import {PlacesResponse, Feature} from 'src/app/interface/places';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation: [number, number] | undefined;

  public isLoadingPlaces: boolean = false;
  public places: Feature [] = [];

  get isuserLocationReady(): boolean{
    return !!this.useLocation;
  }

  constructor(/*private http: HttpClient,*/ 
  private placesApi: PlacesApiClient,
  private mapService: MapService,
  ) { 
    this.getuserLocation() 
  }

public async getuserLocation(): Promise<[number, number]>{
  return new Promise((resolve, reject) =>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        this.useLocation = [coords.longitude, coords.latitude];
        resolve(this.useLocation);
      },
      (err) => {
        alert('No se pudo ver la Geolocalización')
        console.log(err);
        reject();
      }
      );
  });
}

//traer el buscador
getPlacesByQuery(query: string =''){
//todo: evaluar cuando el quiery es nulo
if(query.length === 0){
 this.isLoadingPlaces = false;
 this.places = [];
  return;
}

if(!this.useLocation) throw Error('No hay userlocation');

this.isLoadingPlaces = true;
this.placesApi.get<PlacesResponse>(`/${ query }.json`,{
  params:{
    proximity: this.useLocation.join(',')
  }
}).subscribe(resp =>{
  console.log(resp.features);

  this.isLoadingPlaces = false;
  this.places = resp.features;
  this.mapService.createMarkersFromPLaces( this.places );
});
}

}
