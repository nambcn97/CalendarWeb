import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const redirectUrl = route['_routerState']['url'];

        if (this.userService.isLogged() && this.userService.getCurrentUser().role === 'admin') {
            return true;
        }

        this.router.navigateByUrl(
            this.router.createUrlTree(['/login'], {
                queryParams: {
                    redirectUrl
                }
            })
        );

        return false;
    }
}
