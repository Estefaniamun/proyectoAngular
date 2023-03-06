import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };
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

  updateJuego(juego: Juego): Observable<Juego> {
    const url = `${this.apiurl}/${juego.id}`;
    return this.http.put<Juego>(url, juego, httpOptions);
  }

  borrarJuego(idjuego: any): Observable<Juego> {
    const url = `${this.apiurl}/${idjuego}`;
    return this.http.delete<Juego>(url);
  }
}
