
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes : Routes = [
  {path : 'form', component:UsuarioComponent},
  {path : 'form:/id', component:UsuarioComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
