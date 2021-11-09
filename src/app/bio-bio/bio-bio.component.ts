import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-bio-bio',
  templateUrl: './bio-bio.component.html',
  styleUrls: ['./bio-bio.component.scss']
})
export class BioBioComponent implements OnInit {

  dias:any;

  constructor( private weather:WeatherService) {
    this.dias=weather.datosBio();
   }


  ngOnInit(): void {
  }

}
