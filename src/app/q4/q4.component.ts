import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
    selector: 'app-q4',
    templateUrl: './q4.component.html',
})
export class Q4Component extends QuestionComponent {
    override id = 4;
}
