import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q6',
    templateUrl: './q6.component.html',
})
export class Q6Component extends QuestionComponent {
    override id = 6;
}
