import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q3',
    templateUrl: './q3.component.html',
})
export class Q3Component extends QuestionComponent {
    override id = 3;
    override createControl = (initial: string | null) => new FormControl(initial, Validators.required);

    get answer(): FormControl {
        return this.controls?.answer as FormControl;
    }
}
