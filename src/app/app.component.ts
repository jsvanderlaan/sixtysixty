import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    activeColor: string | null = null;
    constructor(router: Router) {
        router.events.subscribe(e => {
            if (e instanceof ActivationEnd) {
                const color = e.snapshot.data['backgroudColor'];
                this.activeColor = color;

                const theme = document.querySelector('meta[name=theme-color]');
                theme?.setAttribute('content', color);
            }
        });
    }
}
