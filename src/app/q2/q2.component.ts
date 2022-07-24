import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-q2',
    templateUrl: './q2.component.html',
})
export class Q2Component {
    constructor(private router: Router) {}

    options = [{ name: 'Optie 1' }, { name: 'Optie 2' }, { name: 'Mogelijkheid 3' }, { name: 'Perzik' }];

    showError: boolean = false;

    controls = {
        q2: new FormArray(
            this.options.map(() => new FormControl(false)),
            this.minChecked(1)
        ),
    };

    form: FormGroup = new FormGroup(this.controls);

    submit(): void {
        if (!this.form.valid) {
            this.showError = true;
            return;
        }

        this.router.navigateByUrl('/intro');
    }

    minChecked(minRequired = 1): ValidatorFn {
        return ((formGroup: FormGroup) =>
            Object.values(formGroup.controls).filter(control => control.value).length >= minRequired
                ? null
                : { minRequired: true }) as ValidatorFn;
    }
}
