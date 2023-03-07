import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { ListarUsuariosService } from 'src/app/servicios/listar-usuarios.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
usuarios : Usuario[]=[];



constructor(private listarusuarios: ListarUsuariosService){

}
ngOnInit(): void {
  this.listarusuarios.listarUsuarios().subscribe(usuario => { (this.usuarios = usuario); console.log(usuario) });

}
}
