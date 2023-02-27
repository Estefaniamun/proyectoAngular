import { NgForm } from '@angular/forms';
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
  juego:Juego ={
    id:0, nombre:"",descripcion:""
  }
  
constructor( private actualizarjuego:ListarJuegosService ,private route: ActivatedRoute,){
}
ngOnInit(): void {
  let id= this.route.snapshot.paramMap.get('id');
  this.actualizarjuego.obtenerJuego("" + id).subscribe(juego=>{(this.juego = juego)});
  console.log(this.juego);
 }
editar(form: NgForm){
  const id = this.juego.id;
  const nombre = form.value.nombre || this.juego.nombre;
  const descripcion = form.value.descripcion || this.juego.descripcion;
  this.juego = {"id": id, "nombre": nombre, "descripcion": descripcion};
  this.actualizarJuego(this.juego);

  console.log(this.juego);
}

 
  actualizarJuego(j: Juego) {
    this.actualizarjuego.updateJuego(j).subscribe();
    console.log(this.juego);
  }
}
