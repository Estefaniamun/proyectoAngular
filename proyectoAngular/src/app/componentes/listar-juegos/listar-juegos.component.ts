import { ListarJuegosService } from './../../servicios/listar-juegos.service';
import { Juego } from './../../interfaces/juego';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-juegos',
  templateUrl: './listar-juegos.component.html',
  styleUrls: ['./listar-juegos.component.css']
})
export class ListarJuegosComponent {
  juego: Juego[] = [];


  constructor(private listarjuegos: ListarJuegosService, private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.listarjuegos.listarJuegos().subscribe(juego => { (this.juego = juego); console.log(juego) });
   
  }

  listarJuegos():void{
    window.location.reload();
  }
}
