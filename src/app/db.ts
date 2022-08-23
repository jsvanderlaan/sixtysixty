import Dexie, { Table } from 'dexie';

export class AnswersDB extends Dexie {
    answers!: Table<Answer, number>;

    constructor() {
        super('answers');
        this.version(2).stores({
            answers: '++id',
        });

        this.on('populate', () =>
            db.answers.bulkAdd([
                {
                    found: false,
                    answer: null,
                },
                {
                    found: false,
                    answer: null,
                },
                {
                    found: false,
                    answer: null,
                },
                {
                    found: false,
                    answer: null,
                },
                {
                    found: false,
                    answer: null,
                },
                {
                    found: false,
                    answer: null,
                },
            ])
        );
    }
}

export const db = new AnswersDB();

export interface Answer {
    found: boolean;
    answer: boolean[] | null;
}
