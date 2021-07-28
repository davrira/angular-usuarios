
import { Injectable } from '@angular/core';
import { Usuario } from '../components/usuario/usuario';

@Injectable()
export class UsuarioService {

    usuarioInfo : Usuario[] = [
        {
            id:0,
            name:'Juan',
            lastName:'Lopez',
            email:'juan@gmail.com',
            phoneNumber:3112223344,
            type:1
        },
        {
            id:1,
            name:'Jose',
            lastName:'Perez',
            email:'jose@gmail.com',
            phoneNumber:3114445566,
            type:2
        }
    ];
    
    constructor() { 
        console.log("Servicio usuario")
    }//constructor    

    getUsuarios(){
        return this.usuarioInfo            
    }//getUsuarios

    getUsuario(ids : number){
        return this.usuarioInfo[ids]
    }

    borrarUsuario(ids:number){
        this.usuarioInfo.splice(ids,1)
    }
    
    agregar(usuario:Usuario){        
        this.usuarioInfo.push(usuario)
    }

    getUsuarioId(){
        return this.usuarioInfo.length
    }
    
    editar(usuario:Usuario, ids:number){
        this.usuarioInfo.fill(usuario,ids,ids+1)
    }
    
}//class
