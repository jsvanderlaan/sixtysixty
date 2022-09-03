import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { from, map, Observable } from 'rxjs';
import { db } from './db';

@Injectable({
    providedIn: 'root',
})
export class StartGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return from(db.start.get(0)).pipe(
            map(x => {
                if (x?.started) {
                    return true;
                }
                return this.router.createUrlTree(['']);
            })
        );
    }
}
