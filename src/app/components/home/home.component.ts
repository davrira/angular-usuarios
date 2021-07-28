
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  nombre:string = "";
  apellido:string="";
  email:string="";
  numero:number=0;
  tipoUsuario:number=0;


  constructor(private _usuarioServicio : UsuarioService) { }//constructor

  ngOnInit(): void {
  }//
    

  agregar(){
    const newUsuario = new Usuario();

    newUsuario.id = this._usuarioServicio.getUsuarioId()
    newUsuario.name = this.nombre;
    newUsuario.lastName = this.apellido
    newUsuario.email = this.email
    newUsuario.phoneNumber = this.numero
    newUsuario.type = this.tipoUsuario

    this._usuarioServicio.agregar(newUsuario);

  }
  
}//class

