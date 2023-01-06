import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { EquipoService } from 'src/app/services/servicio-equipo/equipo.service';

@Component({
  selector: 'app-form-equipo',
  templateUrl: './form-equipo.component.html',
  styleUrls: ['./form-equipo.component.css']
})
export class FormEquipoComponent implements OnInit{
 
  equipos:Equipo[] = [];



  equipo: Equipo = {
    nombre: '',
    descripcion: '',
    serie: ''
  };

  constructor(private equipoService: EquipoService,
    private router: Router,
    private activo: ActivatedRoute
    ){}

ngOnInit(): void{
  this.getEquipos()
  
}

submitEquipo(){
  this.equipoService.crearEquipo(this.equipo)
  .subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/vista-equipo']);
    },
    
  )
}

getEquipos(): void{
  this.equipoService.getEquipos()
  .subscribe(
    res => this.equipos = res,
  )
}







eliminarEquipo(id: string): void {
  this.equipoService.eliminarEquipo(id)
    .subscribe(
      res => {
        console.log(res);
        this.getEquipos();
      }
    )
}

}
