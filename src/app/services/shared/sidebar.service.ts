import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[]=[];
/*
  menu: any=[{
    titulo:'Principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo:'Dashboard',url:'/dashboard'},
      { titulo:'Progress',url:'/progress'},
      { titulo:'Gráficas',url:'/graficas1'},
      { titulo:'Promesas',url:'/promesas'},
      { titulo:'Rxjs',url:'/rxjs'}
    ]
  },
  {
    titulo:'Mantenimiento',
    icono: 'mdi mdi-folder-lock-open',
    submenu: [
      { titulo:'Usuarios',url:'/usuarios'},
      { titulo:'Medicos',url:'/medicos'},
      { titulo:'Hospitales',url:'/hospitales'}
    ]
  }
];*/
  constructor(
    public _usuarioService: UsuarioService
  ) {


  }

  cargarMenu(){

    this.menu= this._usuarioService.menu;

  }
}
