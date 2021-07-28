
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  usuario:any = {};

  constructor(private _activatedRoute : ActivatedRoute,
              private _usuarioService : UsuarioService,
              private _router : Router
    ) {

    this._activatedRoute.params.subscribe(params =>{
      this.usuario = this._usuarioService.getUsuario(params['id'])
    })

   }//constructor

  ngOnInit(): void {
  }//ngOnInit

  eliminar(ids:number){
    this.usuario.id = this._usuarioService.borrarUsuario(ids);
  }

  editar(ids:number){
    this._router.navigate(['/editar',ids])    
  }

}//class
