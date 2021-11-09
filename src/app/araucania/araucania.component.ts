import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-araucania',
  templateUrl: './araucania.component.html',
  styleUrls: ['./araucania.component.scss']
})
export class AraucaniaComponent implements OnInit {
  dias:any;

  constructor( private weather:WeatherService) {
    this.dias=weather.datosArau();
   }

  ngOnInit(): void {
  }

}
