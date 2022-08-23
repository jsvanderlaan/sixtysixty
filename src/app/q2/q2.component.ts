import { Component } from '@angular/core';
import { options } from '../constants';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q2',
    templateUrl: './q2.component.html',
})
export class Q2Component extends QuestionComponent {
    override id = 2;

    options = options[1];
}
