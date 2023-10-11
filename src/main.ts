/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import  Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoiamFtc3NtaXRoMjAyMyIsImEiOiJjbG5mNTB0dzcwaWo5MnNsbThvbmV4MmlwIn0.ZV1ckomG8aEsKAUhgLCLQg';

/* const map = new Mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11', 
  center: [-74.006, 40.7128], 
  zoom: 12, 
}); */

if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalización.');
  throw new Error('Navegador no soporta la geolocalización');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
