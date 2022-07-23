import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
    selector: 'app-q2',
    templateUrl: './q2.component.html',
})
export class Q2Component {
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
        console.log(this.form.value);
        this.form.updateValueAndValidity();
        if (!this.form.valid) {
            this.showError = true;
            return;
        }

        document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
    }

    minChecked(minRequired = 1): ValidatorFn {
        return ((formGroup: FormGroup) => {
            // let checked = 0
            console.log(formGroup);

            return Object.values(formGroup.controls).filter(control => control.value).length >= minRequired
                ? null
                : { minRequired: true };

            // return null
        }) as ValidatorFn;
    }
}
