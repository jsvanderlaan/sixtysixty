import { Directive, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnswerService } from '../services/answer.service';

@Directive({ selector: 'answer' })
export class AnswerComponent implements OnInit {
    id: number | null = null;
    createControl: ((initial: any | null) => AbstractControl) | null = null;

    controls: { answer: AbstractControl } | null = null;

    form: FormGroup | null = null;

    showError: boolean = false;

    constructor(private router: Router, private readonly _answerService: AnswerService) {}

    ngOnInit(): void {
        if (!this.id) {
            throw new Error('id of the AnswerComponent must be set');
        }
        if (!this.createControl) {
            throw new Error('createControl of the AnswerComponent must be set');
        }

        this._answerService.get(this.id).subscribe(answer => {
            const controls = {
                answer: this.createControl!(answer),
            };
            this.controls = controls;
            this.form = new FormGroup(controls);
        });
    }

    submit(): void {
        if (!this.form?.valid) {
            this.showError = true;
            return;
        }

        this._answerService.answer(this.id!, this.controls?.answer.value!).subscribe(() => this.router.navigateByUrl('/intro'));
    }
}
