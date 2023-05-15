import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiosComponent } from './componentes/Estudios/estudios/estudios.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias/experiencias.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades/habilidades.component';
import { HeaderComponent } from './componentes/header/header/header.component';
import { InicioComponent } from './componentes/Inicio/inicio/inicio.component';
import { SobreMiComponent } from './componentes/Sobre Mi/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiosComponent,
    ExperienciasComponent,
    HabilidadesComponent,
    HeaderComponent,
    InicioComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
