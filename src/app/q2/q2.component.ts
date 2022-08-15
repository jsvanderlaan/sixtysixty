import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q2',
    templateUrl: './q2.component.html',
})
export class Q2Component extends QuestionComponent {
    override id = 2;
    override createControl = (initial: any | null) =>
        new FormArray(
            initial ? initial.map((i: boolean) => new FormControl(i)) : this.options.map(() => new FormControl(false)),
            this.minChecked(1)
        );

    options = [{ name: 'Optie 1' }, { name: 'Optie 2' }, { name: 'Mogelijkheid 3' }, { name: 'Perzik' }];

    get answer(): FormArray<FormControl<boolean | null>> {
        return this.controls?.answer as FormArray<FormControl<boolean | null>>;
    }

    minChecked(minRequired = 1): ValidatorFn {
        return ((formGroup: FormGroup) =>
            Object.values(formGroup.controls).filter(control => control.value).length >= minRequired
                ? null
                : { minRequired: true }) as ValidatorFn;
    }
}
