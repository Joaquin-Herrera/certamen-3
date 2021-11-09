import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Region } from '../model/region';
import { WeatherService } from '../service/weather.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private formbuilder:FormBuilder, private weather:WeatherService) {
      this.formulario = this.formbuilder.group({
        category: ['', [Validators.required]],
        tiempo: ['',[Validators.required]],
        semana: ['', [Validators.required]],
        text: ['', [Validators.maxLength(200)]],
        grados: ['', [Validators.required]],
      });
      this.formulario.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }
  onSubmit(): void {let datos:Region={
    clima: this.tiempo,
    day: this.semana,
    temp: this.text,
    climaImg: '../../assets/'+this.tiempo+'.png'
  };
  console.log(datos);
  if(this.category==1){this.weather.valpo(datos)}
  if(this.category==2){this.weather.metro(datos)}
  if(this.category==3){this.weather.bio(datos)}
  if(this.category==4){this.weather.arau(datos)}
}
  get category(){
    return this.formulario.get('category')?.value;
  }
  get tiempo(){
    return this.formulario.get('tiempo')?.value;
  }
  get semana(){
    return this.formulario.get('semana')?.value;
  }
  get text(){
    return this.formulario.get('text')?.value;
  }
  get grados(){
    return this.formulario.get('grados')?.value;
  }
  /* save(event: Event) {
    event.preventDefault();
    if (this.formulario.valid) {
      const value = this.formulario.value;
      console.log(value);
    }else{
      this.formulario.markAllAsTouched();
    }
  } */

  ngOnInit(): void {
  }
}
