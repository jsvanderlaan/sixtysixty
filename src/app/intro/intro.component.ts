import { Component, OnInit } from '@angular/core';
import JSConfetti from 'js-confetti';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { numberOfQuestions, routeColors, routes } from '../constants';
import { db } from '../db';
import { AnswerService } from '../services/answer.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
})
export class IntroComponent implements OnInit {
    routes = routes;
    questions: number[] = Array.from({ length: numberOfQuestions }, (_, i) => i + 1);

    routeColors = routeColors;
    answers$: Observable<Answer[]> | null = null;
    constructor(private readonly _answerService: AnswerService) {}

    ngOnInit(): void {
        db.start.put({ started: true, id: 0 });
        this.answers$ = combineLatest(
            Array.from({ length: numberOfQuestions }, (_, i) => i + 1).map(i => this._answerService.get(i))
        ).pipe(
            map(answers =>
                answers.map((answer, i: number) => {
                    const answered = answer?.answer !== null;
                    return {
                        label: answer?.found ? `${i + 1}` : '?',
                        answered,
                        color: routeColors[i + 1],
                        route: `/${routes[i + 1]}`,
                        found: answer?.found ?? false,
                    };
                })
            ),
            tap(answers => {
                if (this.all(answers)) {
                    var canvas = (document.getElementById('confetti') ?? undefined) as HTMLCanvasElement | undefined;
                    new JSConfetti({ canvas }).addConfetti({
                        confettiColors: routeColors,
                    });
                }
            })
        );
    }

    any(answers: Answer[]): boolean {
        return answers.some(a => a.found);
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
    found: boolean;
}
