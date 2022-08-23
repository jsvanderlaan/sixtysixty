import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { options } from '../constants';
import { Answer } from '../db';
import { AnswerService } from '../services/answer.service';

@Component({
    selector: 'app-uitslag',
    templateUrl: './uitslag.component.html',
})
export class UitslagComponent implements OnInit {
    constructor(private readonly _answerService: AnswerService) {}
    answers$: Observable<Answer[]> | null = null;
    expected: boolean[][] = [
        [true, false, false, false],
        [true, true, false, false],
    ];

    ngOnInit(): void {
        this.answers$ = this._answerService.getAll();
    }

    arrayEquals(a: boolean[], b: boolean[]) {
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    }

    getAnswerString(id: number, input: boolean[]): string {
        console.log(options[id].filter((_, index) => input[index]));
        return options[id]
            .filter((_, index) => input[index])
            .map(x => `"${x.name}"`)
            .join(' en ');
    }
}
