import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { APP_ROUTING } from './app.routes';

import { UsuarioService } from './servicios/usuario.service';
import { DetalleComponent } from './components/detalle/detalle.component';

import { FormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavbarComponent,
    HomeComponent,
    DetalleComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule

  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
