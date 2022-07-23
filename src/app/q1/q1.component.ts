import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-q1',
    templateUrl: './q1.component.html',
})
export class Q1Component {
    showError: boolean = false;

    controls = {
        q1: new FormControl(null, Validators.required),
    };

    form: FormGroup = new FormGroup(this.controls);

    submit(): void {
        if (!this.form.valid) {
            this.showError = true;
            return;
        }

        document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
    }
}
