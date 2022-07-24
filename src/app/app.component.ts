import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { routeColors } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    activeColor: string | null = null;
    routeColors = routeColors;
    constructor(router: Router) {
        router.events.subscribe(e => {
            if (e instanceof ActivationEnd) {
                this.activeColor = e.snapshot.data['backgroudColor'];
            }
        });
    }
}
