import { Injectable } from '@angular/core';
import { Region } from '../model/region';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public valparaiso: Region[];
  public araucania: Region[];
  public biobio: Region[];
  public metropolitana: Region[];

  constructor() {

    this.valparaiso=[
      {
        day:'Lunes',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Martes',
        climaImg:'../../assets/nublado.png',
        temp:10,
        clima:'nubaldo'
      },
      {
        day:'Miercoles',
        climaImg:'../../assets/lluvioso.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Jueves',
        climaImg:'../../assets/nublado.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Viernes',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Sabado',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Domingo',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
    ]
    this.araucania=[
      {
        day:'Lunes',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Martes',
        climaImg:'../../assets/nublado.png',
        temp:10,
        clima:'nubaldo'
      },
      {
        day:'Miercoles',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Jueves',
        climaImg:'../../assets/lluvioso.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Viernes',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Sabado',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Domingo',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },

    ]
    this.biobio=[
      {
        day:'Lunes',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Martes',
        climaImg:'../../assets/nublado.png',
        temp:10,
        clima:'nubaldo'
      },
      {
        day:'Miercoles',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Jueves',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Viernes',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Sabado',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Domingo',
        climaImg:'../../assets/lluvioso.png',
        temp:18,
        clima:'soleado'
      },

    ]
    this.metropolitana=[
      {
        day:'Lunes',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Martes',
        climaImg:'../../assets/sol.png',
        temp:10,
        clima:'nubaldo'
      },
      {
        day:'Miercoles',
        climaImg:'../../assets/tormenta.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Jueves',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Viernes',
        climaImg:'../../assets/nublado.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Sabado',
        climaImg:'../../assets/nublado.png',
        temp:18,
        clima:'soleado'
      },
      {
        day:'Domingo',
        climaImg:'../../assets/sol.png',
        temp:18,
        clima:'soleado'
      },
    ]
  }

  valpo(data:Region){

    const index = this.valparaiso.findIndex((valpo)=> valpo.day == data.day);
    this.valparaiso[index].clima = data.clima;
    this.valparaiso[index].climaImg =data.climaImg;
    this.valparaiso[index].temp = data.temp;
  }

  metro(data:Region){
    const index = this.metropolitana.findIndex((metro)=> metro.day == data.day);
    this.metropolitana[index].clima = data.clima;
    this.metropolitana[index].climaImg =data.climaImg;
    this.metropolitana[index].temp = data.temp;
  }

  bio(data:Region){
      const index = this.biobio.findIndex((bio)=> bio.day == data.day);
      this.biobio[index].clima = data.clima;
      this.biobio[index].climaImg =data.climaImg;
      this.biobio[index].temp = data.temp;
  }
      arau(data:Region){
        const index = this.araucania.findIndex((arau)=> arau.day == data.day);
        this.araucania[index].clima = data.clima;
        this.araucania[index].climaImg =data.climaImg;
        this.araucania[index].temp = data.temp;
      }
      datosValpo(){
        return this.valparaiso;
      }
      datosMetro(){
        return this.metropolitana;
      }
      datosBio(){
        return this.biobio;
      }
      datosArau(){
        return this.araucania;
      }
}
