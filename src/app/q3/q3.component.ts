import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q3',
    templateUrl: './q3.component.html',
})
export class Q3Component extends QuestionComponent {
    override id = 3;
}
