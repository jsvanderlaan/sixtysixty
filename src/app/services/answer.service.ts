import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { Answer, db } from '../db';

@Injectable({
    providedIn: 'root',
})
export class AnswerService {
    found(id: number): Observable<number> {
        return from(db.answers.update(id, { found: true }));
    }

    answer(id: number, answer: boolean[]): Observable<number> {
        return from(db.answers.update(id, { answer }));
    }

    get(id: number): Observable<Answer | null> {
        return from(db.answers.get(id)).pipe(map(answer => answer ?? null));
    }

    getAll(): Observable<Answer[]> {
        return from(db.answers.toArray());
    }
}
