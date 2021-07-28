
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './components/editar/editar.component';

const APP_ROUTES : Routes = [
    
    {path: 'home', component : HomeComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'usuario/:id', component:DetalleComponent},
    {path: 'editar/:id',component:EditarComponent },
    {path: '**', pathMatch : 'full', redirectTo : 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);