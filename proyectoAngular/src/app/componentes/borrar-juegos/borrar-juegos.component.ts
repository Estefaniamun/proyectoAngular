import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-borrar-juegos',
  templateUrl: './borrar-juegos.component.html',
  styleUrls: ['./borrar-juegos.component.css']
})
export class BorrarJuegosComponent  implements OnInit{
  juego: Juego[]=[];
  constructor( private borrarjuego:ListarJuegosService){

  }
  
  borrarJuego(idjuego:number){
   this.borrarjuego.borrarJuego(idjuego).subscribe(()=>{this.juego=this.juego.filter(j=>j.id!==idjuego);console.log(this.juego)});
  }
  ngOnInit(): void {
   
  }

}
