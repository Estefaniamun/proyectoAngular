import { ListarUsuariosService } from './../../servicios/listar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{
  usuario: Usuario[] = [];

  constructor(private listarusuarios: ListarUsuariosService){

  }
  ngOnInit(): void {
    this.listarusuarios.listarUsuarios().subscribe(usuario => { (this.usuario = usuario); console.log(usuario) });

  }
}
