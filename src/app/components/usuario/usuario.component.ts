
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  usuarios:Usuario [] = [];

  constructor( private _usuarioServicio : UsuarioService,
               private _router:Router
    ) { }//constructor

  ngOnInit(): void {

    this.usuarios = this._usuarioServicio.getUsuarios();    

  }//ngOnInit

  verUsuario(ids:number){ 
    this._router.navigate (['/usuario',ids])    
  }//verUsuario

  

}//class
