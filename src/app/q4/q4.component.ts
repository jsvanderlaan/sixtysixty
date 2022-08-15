import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q4',
    templateUrl: './q4.component.html',
})
export class Q4Component extends QuestionComponent {
    override id = 4;
    override createControl = (initial: string | null) => new FormControl(initial, Validators.required);

    get answer(): FormControl {
        return this.controls?.answer as FormControl;
    }
}
