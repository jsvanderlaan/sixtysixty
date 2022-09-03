import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { db, generateDb } from '../db';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
})
export class ResetComponent implements OnInit {
    constructor(private readonly _router: Router) {}

    ngOnInit(): void {
        db.delete().then(() => {
            generateDb();
            return this._router.navigateByUrl('/');
        });
    }
}
