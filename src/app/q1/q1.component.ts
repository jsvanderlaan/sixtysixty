import { Component } from '@angular/core';
import { options } from '../constants';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q1',
    templateUrl: './q1.component.html',
})
export class Q1Component extends QuestionComponent {
    override id = 1;

    options = options[0];
}
