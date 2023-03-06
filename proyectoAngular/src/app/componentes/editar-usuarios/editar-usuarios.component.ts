import { ListarUsuariosService } from './../../servicios/listar-usuarios.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent {
  public usuario: Usuario = {
    id:0,
    usuario:"",
    password:"",
    nombre:"",
    apellidos:"",
    direccion:"",
    rol:""
 };
  id = this.route.snapshot.paramMap.get('id');
 
 usuarios: Usuario[]=[];
 
constructor( private actualizarusuario: ListarUsuariosService ,private route: ActivatedRoute,private listarusuarios: ListarUsuariosService, private router: Router){
}

actualizarUsuario(j: Usuario) {
this.usuario.id = this.id;
  this.actualizarusuario.updateUsuario(j).subscribe();
  
}


ngOnInit(): void {
  this.listarusuarios.listarUsuarios().subscribe(usuario => { (this.usuarios = usuario); console.log(this.usuarios) });
 }
}
