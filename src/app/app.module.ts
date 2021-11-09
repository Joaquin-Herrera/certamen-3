import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ValparaisoComponent } from './valparaiso/valparaiso.component';
import { MetropolitanaComponent } from './metropolitana/metropolitana.component';
import { BioBioComponent } from './bio-bio/bio-bio.component';
import { AraucaniaComponent } from './araucania/araucania.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FormularioComponent,
    ValparaisoComponent,
    MetropolitanaComponent,
    BioBioComponent,
    AraucaniaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
