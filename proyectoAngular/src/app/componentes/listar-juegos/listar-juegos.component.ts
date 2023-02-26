import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Juego } from './../../interfaces/juego';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-juegos',
  templateUrl: './listar-juegos.component.html',
  styleUrls: ['./listar-juegos.component.css']
})
export class ListarJuegosComponent {
  juego: Juego[] = [];


  constructor(private listarjuegos: ListarJuegosService) {

  }

  ngOnInit(): void {
    this.listarjuegos.listarJuegos().subscribe(juego => { (this.juego = juego); console.log(juego) });
  }
}
