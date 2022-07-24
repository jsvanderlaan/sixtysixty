import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-q1',
    templateUrl: './q1.component.html',
})
export class Q1Component {
    constructor(private router: Router) {}

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

        this.router.navigateByUrl('/intro');
    }
}
