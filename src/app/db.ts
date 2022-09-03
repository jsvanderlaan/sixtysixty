import Dexie, { Table } from 'dexie';

export class AnswersDB extends Dexie {
    answers!: Table<Answer, number>;
    start!: Table<Start, number>;

    constructor() {
        super('answers');
        this.version(3).stores({
            answers: '++id',
            start: '++id',
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

export let db: AnswersDB;

export const generateDb = () => (db = new AnswersDB());
generateDb();

export interface Answer {
    found: boolean;
    answer: boolean[] | null;
}
export interface Start {
    started: boolean;
    id: number;
}

export interface Img {
    url: string;
    text?: string;
}
