import { Component, OnInit } from '@angular/core';
import { numberOfQuestions, routeColors, routes } from '../constants';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
})
export class IntroComponent implements OnInit {
    routes = routes;
    routeColors = routeColors;
    questions: number[] = Array.from({ length: numberOfQuestions }, (_, i) => i + 1);
    constructor() {}

    ngOnInit(): void {}
}
