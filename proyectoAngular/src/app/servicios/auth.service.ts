import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl="http://localhost:5555/usuarios";
  
  constructor(private http: HttpClient) {
    
  }

  login(iduser: string, password:string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${iduser}`);
  }
}
