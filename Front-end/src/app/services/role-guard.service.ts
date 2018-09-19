import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;

        const token = localStorage.getItem('token');

        // decode the token to get its payload
        // const tokenPayload = decode(token);

        // if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
        //   this.router.navigate(['login']);
        //   return false;
        // }
        return true;
    }
}
