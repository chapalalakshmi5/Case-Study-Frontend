import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtClientService } from './jwt-client-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
//constructor for jwt service
constructor(private service:JwtClientService,private router:Router)
{
  
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.service.isLoggedIn())
   {
     return true;
   }
   this.router.navigate(['login'])
   
      return false;
  }
  
}
