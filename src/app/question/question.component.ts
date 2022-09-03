import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { routes } from '../constants';
import { Img } from '../db';
import { AnswerService } from '../services/answer.service';

@Component({ selector: 'question', templateUrl: './question.component.html' })
export class QuestionComponent implements OnInit {
    // id: number | null = null;

    @Input() identifier!: number;
    @Input() title!: string;
    @Input() question!: string;
    @Input() qImgs!: Img[];
    @Input() options!: [string, string, string, string];
    @Input() answers!: [boolean, boolean, boolean, boolean];
    @Input() toelichting!: string;
    @Input() aImgs!: Img[];

    controls: { answer: AbstractControl } | null = null;

    form: FormGroup | null = null;
    showError: boolean = false;
    answered: boolean = false;

    get answer(): FormArray<FormControl<boolean>> {
        return this.controls?.answer as FormArray<FormControl<boolean>>;
    }

    constructor(private router: Router, private readonly _answerService: AnswerService) {}

    ngOnInit(): void {
        if (this.identifier === undefined) {
            throw new Error('id of the AnswerComponent must be set');
        }

        this.controls = {
            answer: new FormArray(
                [null, null, null, null].map(() => new FormControl(false)),
                this.minChecked(1)
            ),
        };
        this.form = new FormGroup(this.controls);

        this._answerService
            .found(this.identifier)
            .pipe(switchMap(() => this._answerService.get(this.identifier!)))
            .subscribe(answer => {
                this.answered = !!answer?.answer;
                this.controls = {
                    answer: new FormArray(
                        answer?.answer
                            ? answer.answer.map((i: boolean) => new FormControl(i))
                            : [null, null, null, null].map(() => new FormControl(false)),
                        this.minChecked(1)
                    ),
                };
                this.form = new FormGroup(this.controls);
            });
    }

    submit(): void {
        if (!this.form?.valid) {
            this.showError = true;
            return;
        }

        this._answerService.answer(this.identifier!, this.controls?.answer.value!).subscribe(() => (this.answered = true));
    }

    minChecked(minRequired = 1): ValidatorFn {
        return ((formGroup: FormGroup) =>
            Object.values(formGroup.controls).filter(control => control.value).length >= minRequired
                ? null
                : { minRequired: true }) as ValidatorFn;
    }

    arrayEquals(a: boolean[], b: boolean[]) {
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
    }

    getAnswerString(input: boolean[]): string {
        return this.options
            .filter((_, index) => input[index])
            .map(x => `"${x}"`)
            .join(' en ');
    }

    back(): void {
        this.router.navigateByUrl(routes[0]);
    }
}
