import { Component, OnInit, } from '@angular/core';
import { Input } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-valparaiso',
  templateUrl: './valparaiso.component.html',
  styleUrls: ['./valparaiso.component.scss']
})
export class ValparaisoComponent implements OnInit {

  dias:any;

  constructor( private weather:WeatherService) {
    this.dias=weather.datosValpo();
   }

  ngOnInit(): void {
  }

}
