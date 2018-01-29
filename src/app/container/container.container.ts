import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ContainerEffects } from "./container.effects";
import { containerReducers } from "./container.reducer";
import { Observable } from "rxjs/Observable";
import { ListContainer, StartContainer } from "./container.action";
import { ContainerState } from "./models/container.model";




@Injectable()
export class ContainerContainer {

    constructor(private store: Store<any>, containerEffects: ContainerEffects) { }
    
    public loadContainers(): Observable<ContainerState> {
        return this.store.select(s=> s.containerReducers);
    }

    public listContainers() {
        this.store.dispatch(new ListContainer());
    }

    public startContainer(id: string) {
        this.store.dispatch(new StartContainer(id));
    }

    public stopContainer(id: string) {

    }
}