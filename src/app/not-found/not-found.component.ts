import { Component, OnInit } from '@angular/core';
import { numberOfQuestions, routeColors } from '../constants';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
    constructor() {}

    routeColors = routeColors;
    questions: number[] = Array.from({ length: numberOfQuestions }, (_, i) => i + 1);
    ngOnInit(): void {}
}
