import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/componentes-general/home/home.component';
import { NavegacionComponent } from './components/componentes-general/navegacion/navegacion.component';
import { VistaEquipoComponent } from './components/componentes-equipos/vista-equipo/vista-equipo.component';
import { FormEquipoComponent } from './components/componentes-equipos/form-equipo/form-equipo.component';
import { EditFormComponent } from './components/componentes-equipos/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    VistaEquipoComponent,
    FormEquipoComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
