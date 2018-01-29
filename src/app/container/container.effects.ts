import { Injectable } from "@angular/core";
import { Effect, Actions} from '@ngrx/effects';
import { Observable } from "rxjs/Rx";
import { Action, Store } from "@ngrx/store";
import { ContainerService } from "./container.service";
import { ListContainer, ContainerActionTypes, ListContainerCompleted, StartContainer, StartContainerCompleted } from "./container.action";


@Injectable()
export class ContainerEffects {

    constructor(private actions$: Actions, 
        private containerServices: ContainerService,
        private store: Store<any>) { }

    @Effect()
    listContainer$: Observable<Action> = this.actions$
        .ofType<ListContainer>(ContainerActionTypes.LIST_CONTAINER)
        .switchMap(s => this.containerServices.listContainer()
            .map(res => {
                return new ListContainerCompleted(res);
            }))
    
    @Effect()
    startContainer$: Observable<Action> = this.actions$
        .ofType<StartContainer>(ContainerActionTypes.START_CONTAINER)
        .map(action => action.payload)
        .switchMap(s => this.containerServices.startContainer(s)
            .map(res => {
                return new StartContainerCompleted("");
            })
            .catch(error => Observable.throw(error))
        );
}