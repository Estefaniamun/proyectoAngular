import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Juego } from 'src/app/interfaces/juego';

@Component({
  selector: 'app-crear-juegos',
  templateUrl: './crear-juegos.component.html',
  styleUrls: ['./crear-juegos.component.css']
})
export class CrearJuegosComponent implements OnInit{

model = {
  id:'',
  nombre:'',
  portada:'',
  descripcion:''
};

  constructor(private juego: ListarJuegosService){

  }

 onSubmit({value}: NgForm):void{
  console.log('Guardar', value);
  const data: Juego = {
    ...value
  }
  
  this.juego.saveJuego(data).pipe().subscribe();

 }

  ngOnInit(): void {
      
  }

  

}


