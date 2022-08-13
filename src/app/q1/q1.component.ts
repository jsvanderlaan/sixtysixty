import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AnswerComponent } from '../answer/answer.component';

@Component({
    selector: 'app-q1',
    templateUrl: './q1.component.html',
})
export class Q1Component extends AnswerComponent {
    override id = 1;
    override createControl = (initial: string | null) => new FormControl(initial, Validators.required);

    get answer(): FormControl {
        return this.controls?.answer as FormControl;
    }
}
