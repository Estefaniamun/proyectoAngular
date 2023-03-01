import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {
  private apiurl="http://localhost:5555/usuarios";
  constructor(private http:HttpClient) { }


  login(iduser: string, password:string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiurl}/${iduser}`);
  } 
  
  
  
  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiurl);
  }

  saveUsuario(usuario:any):Observable<any>{
    return this.http.post<any>(`${this.apiurl}`, usuario);
  }

  
}
