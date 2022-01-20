import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }
  
  checkCookieSession(): boolean{
    try {
      const token = localStorage.getItem('token');
      if (!token){
        this.route.navigate(['/','auth'])
        return false
      }return true;
      
    } catch (error) {
      console.log('error', error);
      return false;
      
      
    }
  }
}
