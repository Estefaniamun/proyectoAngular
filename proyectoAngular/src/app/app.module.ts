import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PieComponent } from './componentes/pie/pie.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListarCiudadesComponent } from './componentes/listar-ciudades/listar-ciudades.component';
import { CrearCiudadesComponent } from './componentes/crear-ciudades/crear-ciudades.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 

import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
const appRoutes: Routes = [
  { path: 'listarCiudades', component: ListarCiudadesComponent },
  { path: 'crearCiudades', component: CrearCiudadesComponent },
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
    CrearCiudadesComponent,
    ListarCiudadesComponent,
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
