import { Injectable } from "@angular/core";
import { Effect, Actions} from '@ngrx/effects';
import { Observable } from "rxjs/Rx";
import { Action, Store } from "@ngrx/store";
import { ContainerService } from "./container.service";
import { ListContainer, ContainerActionTypes, ListContainerCompleted } from "./container.action";


@Injectable()
export class ContainerEffects {

    constructor(private actions$: Actions, 
        private containerServices: ContainerService,
        private store: Store<any>) { }

    @Effect()
    listContainer$: Observable<Action> = this.actions$
        .ofType<ListContainer>(ContainerActionTypes.LIST_CONTAINER)
        .switchMap(s => this.containerServices.listImages()
            .map(res => {
                return new ListContainerCompleted(res[0]);
            }))
}