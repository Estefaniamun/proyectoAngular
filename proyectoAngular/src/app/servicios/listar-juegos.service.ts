import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class ListarJuegosService {
  private apiurl="http://localhost:5555/juegos";
  constructor(private http:HttpClient) { }

  listarJuegos(): Observable<Juego[]>{
    return this.http.get<Juego[]>(this.apiurl);
  }

  saveJuego(juego:any):Observable<any>{
    return this.http.post<any>(`${this.apiurl}`, juego);
  }
}
