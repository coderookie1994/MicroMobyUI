import { Component } from '@angular/core';

import { ContainerContainer } from './container.container';
@Component({
    selector: "container",
    templateUrl: "./container.html"
})
export class ContainerComponent {
    
    constructor(private container: ContainerContainer) { }
    
}