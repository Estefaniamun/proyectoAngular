import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { ActivatedRoute, Route } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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
 
  
constructor( private actualizarjuego:ListarJuegosService ,private route: ActivatedRoute,){
}

actualizarJuego(j: Juego) {
  this.actualizarjuego.updateJuego(j).subscribe();
  let id = this.route.snapshot.paramMap.get('id');

  
}


ngOnInit(): void {

 }




 
 

 
}
