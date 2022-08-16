import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
    @Input() color: string = 'black';
    @Input() innerColor: string = 'white';

    constructor() {}

    ngOnInit(): void {}
}
