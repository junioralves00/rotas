import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import {AuthService} from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canActivate: Verificando se usuário pode carregar cód. Módulo');
    return this.verificarAcesso();
  }

  private verificarAcesso(){

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: Verificando se usuário pode carregar cód. Módulo');
      return this.verificarAcesso();
    }

}
