import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { numberOfQuestions, routeColors, routes } from '../constants';
import { AnswerService } from '../services/answer.service';

@Component({
    selector: 'app-answers',
    templateUrl: './answers.component.html',
})
export class AnswersComponent implements OnInit {
    routeColors = routeColors;
    answers$: Observable<Answer[]> | null = null;
    constructor(private readonly _answerService: AnswerService) {}

    ngOnInit(): void {
        this.answers$ = combineLatest(
            Array.from({ length: numberOfQuestions }, (_, i) => i + 1).map(i => this._answerService.get(i))
        ).pipe(
            map(answers =>
                answers.map((answer, i: number) => {
                    const answered = answer !== null;
                    return {
                        label: answered ? `${i + 1}` : '?',
                        answered,
                        color: routeColors[i + 1],
                        route: `/${routes[i + 1]}`,
                    };
                })
            )
        );
    }

    any(answers: Answer[]): boolean {
        return answers.some(a => a.answered);
    }

    all(answer: Answer[]): boolean {
        return answer.every(a => a.answered);
    }
}

interface Answer {
    label: string;
    answered: boolean;
    color: string;
    route: string;
}
