import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

import { ContainerContainer } from './container.container';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
@Component({
    selector: "container",
    templateUrl: "./container.component.html",
})
export class ContainerComponent {
    
    private container$: Observable<any>;
    private observables: Array<Subscription> = new Array();

    constructor(private container: ContainerContainer) { }

    ngOnInit() {
        this.container$ = this.container.loadContainers();
        this.observables.push(this.container$.subscribe((data) => {
            console.log(data);
        }));
    }

    ngOnChanges() {
    }

    public listContainer() {
        this.container.listContainers();
    }

    public startContainer(id: string) {
        this.container.startContainer(id);
    }

    public ngOnDestroy() {
        for(let o of this.observables) {
            o.unsubscribe();
        }
    }    
}