import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { db } from '../db';

@Injectable({
    providedIn: 'root',
})
export class AnswerService {
    answer(id: number, answer: any): Observable<number> {
        return from(db.answers.put(answer, id));
    }

    get(id: number): Observable<string | null> {
        return from(db.answers.get(id)).pipe(map(answer => answer ?? null));
    }
}
