import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q5',
    templateUrl: './q5.component.html',
})
export class Q5Component extends QuestionComponent {
    override id = 5;
    override createControl = (initial: string | null) => new FormControl(initial, Validators.required);

    get answer(): FormControl {
        return this.controls?.answer as FormControl;
    }
}
