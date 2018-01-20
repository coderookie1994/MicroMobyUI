import { Store, Action } from '@ngrx/store';
import { ContainerState } from './models/container.model';

export class ContainerActionTypes {
    
    static LIST_CONTAINER = 'LIST_CONTAINER';
    static LIST_CONTAINER_COMPLETED = 'LIST_CONTAINER_COMPLETED';
    
    static START_CONTAINER = 'START_CONTAINER';
    static START_CONTAINER_COMPLETED = 'START_CONTAINER_COMPLETED';
}

export class ListContainer implements Action {
    readonly type = ContainerActionTypes.LIST_CONTAINER;
    constructor(public payload: string = "") { }
}

export class ListContainerCompleted implements Action {
    readonly type = ContainerActionTypes.LIST_CONTAINER_COMPLETED;
    constructor(public payload: ContainerState) { }
}

export class StartContainer implements Action {
    readonly type = ContainerActionTypes.START_CONTAINER;
    constructor(public payload: string) { }
}

export class StartContainerCompleted implements Action {
    readonly type = ContainerActionTypes.START_CONTAINER_COMPLETED;
    constructor(public payload: any) { }
}

export type ContainerActions = 
    ListContainer | 
    ListContainerCompleted |
    StartContainer |
    StartContainerCompleted;