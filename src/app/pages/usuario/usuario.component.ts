
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router,
    private _activatedRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
