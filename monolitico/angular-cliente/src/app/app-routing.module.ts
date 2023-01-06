import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './components/componentes-equipos/edit-form/edit-form.component';
import { FormEquipoComponent } from './components/componentes-equipos/form-equipo/form-equipo.component';
import { VistaEquipoComponent } from './components/componentes-equipos/vista-equipo/vista-equipo.component';
import { HomeComponent } from './components/componentes-general/home/home.component';

const routes: Routes = [
 


{ path: '',
component: HomeComponent
},
{ path: 'vista-equipo',
component: VistaEquipoComponent
},
{ path: 'crear-equipo',
component: FormEquipoComponent
},
{ path: 'equipo/edit/:id',
component: EditFormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
