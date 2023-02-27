import { ListarUsuariosService } from './../../servicios/listar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private router: Router;
  private auth: ListarUsuariosService;

  constructor(protected routerp: Router, authp:ListarUsuariosService){
    this.router=routerp;
    this.auth=authp;
  }

  login (form:NgForm){
    const usuario=form.value.usuario;
    const password=form.value.password; 
    this.auth.login(usuario,password).pipe(first()).subscribe((respuesta: any) =>{
      console.log(respuesta);
      if (respuesta){
        localStorage.setItem('token',respuesta);
        this.router.navigate(['/Home']);
      }
      
    })
  }

  ngOnInit(): void {

  }
}
