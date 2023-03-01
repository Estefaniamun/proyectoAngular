import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-editar-juegos',
  templateUrl: './editar-juegos.component.html',
  styleUrls: ['./editar-juegos.component.css']
})
export class EditarJuegosComponent implements OnInit{
 public juego:Juego[]=[];
  
constructor( private actualizarjuego:ListarJuegosService ,private route: ActivatedRoute,){
}

actualizarJuego(j: Juego) {
  this.actualizarjuego.updateJuego(j).subscribe((data)=>{
    console.log(data);
  },
  (error)=>{
console.log(error);
  });
}
ngOnInit(): void {
 
 }




 
 

 
}
