import { ListarUsuariosService } from './../../servicios/listar-usuarios.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent {
  model = {
    id:'',
    usuario:'',
    password:'',
    nombre:'',
    apellidos:'',
    direccion:'',
    rol:''
  };

  constructor(private usuario: ListarUsuariosService){

  }
  onSubmit({value}: NgForm):void{
    const data: Usuario = {
      ...value
    }
    this.usuario.saveUsuario(data).pipe().subscribe();

  }


}
