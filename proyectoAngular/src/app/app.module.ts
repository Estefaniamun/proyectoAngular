import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PieComponent } from './componentes/pie/pie.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ListarJuegosComponent } from './componentes/listar-juegos/listar-juegos.component';
import { EditarJuegosComponent } from './componentes/editar-juegos/editar-juegos.component';
import { CrearJuegosComponent } from './componentes/crear-juegos/crear-juegos.component';
import { BorrarJuegosComponent } from './componentes/borrar-juegos/borrar-juegos.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
import { EditarUsuariosComponent } from './componentes/editar-usuarios/editar-usuarios.component';
import { BorrarUsuariosComponent } from './componentes/borrar-usuarios/borrar-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select';
import { ModalComponent } from './componentes/borrar-juegos/modal/modal.component';
const appRoutes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Logout', canActivate:[AuthGuard], component:LogoutComponent},
  {path: 'listarUsuarios', component: ListarUsuariosComponent},
  {path: 'crearUsuarios', component: CrearUsuariosComponent},
  { path: 'listarJuegos', component: ListarJuegosComponent },
  { path: 'crearJuegos', component: CrearJuegosComponent },
  {path: 'editarJuegos/:id', component: EditarJuegosComponent},
  {path: 'borrarJuegos/:id', component: BorrarJuegosComponent},
  {path: 'principal', component: PrincipalComponent},
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: '**', component: PrincipalComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    PieComponent,
    ListarJuegosComponent,
    EditarJuegosComponent,
    CrearJuegosComponent,
    BorrarJuegosComponent,
    ListarUsuariosComponent,
    CrearUsuariosComponent,
    EditarUsuariosComponent,
    BorrarUsuariosComponent,
    LoginComponent,
    LogoutComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
