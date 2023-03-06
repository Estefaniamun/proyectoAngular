import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-borrar-juegos',
  templateUrl: './borrar-juegos.component.html',
  styleUrls: ['./borrar-juegos.component.css']
})
export class BorrarJuegosComponent  implements OnInit{
  juegos: Juego[]=[];
  public juego: Juego = {
    id:0,
    nombre:"",
    descripcion:""
 };
  id = this.route.snapshot.paramMap.get('id');
 
 
constructor( private eliminarjuego:ListarJuegosService ,private route: ActivatedRoute,private listarjuegos: ListarJuegosService, private router: Router){
}

eliminarJuego(j: Juego) {
this.juego.id = this.id;
j.id = this.juego.id;
console.log(j.id);
  this.eliminarjuego.borrarJuego(j.id).subscribe();
  
}


ngOnInit(): void {
  this.listarjuegos.listarJuegos().subscribe(juego => { (this.juegos = juego); console.log(this.juegos) });
  
 }

}
