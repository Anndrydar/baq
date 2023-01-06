import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipo } from 'src/app/modules/interfaces-equipo/equipo';
import { EquipoService } from 'src/app/services/servicio-equipo/equipo.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{

  equipo: Equipo= {
    nombre: '',
    descripcion: '',
    serie: ''
  };

constructor(private equipoService: EquipoService,
  private router: Router,
  private active: ActivatedRoute
  ){}


ngOnInit(){
  const params = this.active.snapshot.params;
 if(params){
 this.equipoService.getEquipo(params.id).
 subscribe(
  res =>{
    console.log(res),
    this.equipo = res;
 }
 )
 }
}

editEquipo(){
delete this.equipo.__v;
this.equipoService.editEquipo(this.equipo._id, this.equipo)
.subscribe(
  res=> {
    console.log(res);
    this.router.navigate(['/crear-equipo'])
  }
)


}




}