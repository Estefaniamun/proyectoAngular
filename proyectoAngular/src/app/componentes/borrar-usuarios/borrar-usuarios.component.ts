import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ListarUsuariosService } from 'src/app/servicios/listar-usuarios.service';

@Component({
  selector: 'app-borrar-usuarios',
  templateUrl: './borrar-usuarios.component.html',
  styleUrls: ['./borrar-usuarios.component.css']
})
export class BorrarUsuariosComponent implements OnInit{
  usuarios: Usuario[]=[];
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
 
 
constructor( private eliminarusuario:ListarUsuariosService ,private route: ActivatedRoute,private listarusuarios: ListarUsuariosService, private router: Router){
}

eliminarUsuario(u: Usuario) {
this.usuario.id = this.id;
u.id = this.usuario.id;
console.log(u.id);
  this.eliminarusuario.borrarUsuario(u.id).subscribe();
  
}


ngOnInit(): void {
  this.listarusuarios.listarUsuarios().subscribe(usuario => { (this.usuarios = usuario); console.log(this.usuarios) });
  
 }
}
