import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };
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

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiurl}/${usuario.id}`;
    return this.http.put<Usuario>(url, usuario, httpOptions);
  }

  borrarUsuario(idUsuario: any): Observable<Usuario> {
    const url = `${this.apiurl}/${idUsuario}`;
    return this.http.delete<Usuario>(url);
  }
}
