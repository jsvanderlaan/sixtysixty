import Dexie, { Table } from 'dexie';

export class AnswersDB extends Dexie {
    answers!: Table<any, number>;

    constructor() {
        super('answers');
        this.version(1).stores({
            answers: '',
        });
    }
}

export const db = new AnswersDB();
