import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-editar-juegos',
  templateUrl: './editar-juegos.component.html',
  styleUrls: ['./editar-juegos.component.css']
})
export class EditarJuegosComponent implements OnInit{
 public juego: Juego = {
    id:0,
    nombre:"",
    descripcion:""
 };
  id = this.route.snapshot.paramMap.get('id');
 
 juegos: Juego[]=[];
 
constructor( private actualizarjuego:ListarJuegosService ,private route: ActivatedRoute,private listarjuegos: ListarJuegosService, private router: Router){
}

actualizarJuego(j: Juego) {
this.juego.id = this.id;
  this.actualizarjuego.updateJuego(j).subscribe();
  
}


ngOnInit(): void {
  this.listarjuegos.listarJuegos().subscribe(juego => { (this.juegos = juego); console.log(this.juegos) });
 }




 
 

 
}
