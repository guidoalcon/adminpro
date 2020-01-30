import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  /*
  canActivate(
        next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  constructor(
    public _usuarioService: UsuarioService,
    public router:Router
  ){}

  canActivate(){

    if( this._usuarioService.usuario.role === 'ADMIN_ROLE'){
          return true;

    }else{
      console.log('Bloquedo por el admin guard');
      this.router.navigate(['/login']);
      this._usuarioService.logout();
    }
    return true;
  }

}
