import { Directive, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { routes } from '../constants';
import { AnswerService } from '../services/answer.service';

@Directive({ selector: 'question' })
export class QuestionComponent implements OnInit {
    id: number | null = null;

    controls: { answer: AbstractControl } | null = null;

    form: FormGroup | null = null;

    showError: boolean = false;

    get answer(): FormArray<FormControl<boolean | null>> {
        return this.controls?.answer as FormArray<FormControl<boolean | null>>;
    }

    constructor(private router: Router, private readonly _answerService: AnswerService) {}

    ngOnInit(): void {
        if (!this.id) {
            throw new Error('id of the AnswerComponent must be set');
        }

        this._answerService
            .found(this.id)
            .pipe(switchMap(() => this._answerService.get(this.id!)))
            .subscribe(answer => {
                const initial = answer?.answer;
                this.controls = {
                    answer: new FormArray(
                        initial
                            ? initial.map((i: boolean) => new FormControl(i))
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

        this._answerService.answer(this.id!, this.controls?.answer.value!).subscribe(() => this.router.navigateByUrl(routes[0]));
    }

    minChecked(minRequired = 1): ValidatorFn {
        return ((formGroup: FormGroup) =>
            Object.values(formGroup.controls).filter(control => control.value).length >= minRequired
                ? null
                : { minRequired: true }) as ValidatorFn;
    }
}
