import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public  _usuarioService: UsuarioService,
    public router: Router){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._usuarioService.estaLogueado()){
        console.log('PASO EL GUARD');
        return true;
      }else{
        console.log('Bloqueado por guard');
        this.router.navigate(['/login']);
        return false;
      }
      //console.log('Paso por el login Guard');
      return true;
  }

}
