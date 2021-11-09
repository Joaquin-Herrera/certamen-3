import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-metropolitana',
  templateUrl: './metropolitana.component.html',
  styleUrls: ['./metropolitana.component.scss']
})
export class MetropolitanaComponent implements OnInit {

  dias:any;

  constructor( private weather:WeatherService) {
    this.dias=weather.datosMetro();
   }


  ngOnInit(): void {
  }

}
