
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuarioEdit :any = {}
  id = 0;
  nombre:string = "";
  apellido:string="";
  email:string="";
  numero:number=0;
  tipoUsuario:number=0;

  constructor( private _usuarioServicio : UsuarioService,
                private _activatedRouter : ActivatedRoute
    ) { 

      this._activatedRouter.params.subscribe(params => {
        this.usuarioEdit = this._usuarioServicio.getUsuario(params['id'])
      })

    }

  ngOnInit(): void {
  }

  editar(){

    const updateUsuario = new Usuario();

    updateUsuario.id = this.id
    updateUsuario.name = this.nombre;
    updateUsuario.lastName = this.apellido
    updateUsuario.email = this.email
    updateUsuario.phoneNumber = this.numero
    updateUsuario.type = this.tipoUsuario

    this._usuarioServicio.editar(updateUsuario,updateUsuario.id);


  }

}
