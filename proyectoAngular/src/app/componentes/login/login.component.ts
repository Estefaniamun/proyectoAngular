import { AuthService } from './../../servicios/auth.service';
import { ListarUsuariosService } from 'src/app/servicios/listar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario[]=[];
  constructor(private usuariosService: AuthServiceService) { }
  private login(): void {
    this.usuariosService.login().subscribe({
    (data)=> {
      for(let i = 0; i<data.length; i++){
      if (data[i].usuario == this.usuario.usuario && data[i].password == this.usuario.password) {
        this.logueado() = data[i];
        localStorage.setItem('logueado', '1');
        console.log(data[i]);
      }
    }
  }
},
(error) => {
  this.error = error;
}.add(async () => {
  await this.router.navigate(['/principal']);
  location.reload();
} {

}));
};

onSubmit(){
  this.usuario.usuario = this.email.value;
  this.usuario.password = this.profileForm.controls.value;
  this.login();
}



}
