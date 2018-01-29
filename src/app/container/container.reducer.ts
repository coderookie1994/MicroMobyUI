import { ContainerState, DefaultContainerState } from "./models/container.model";
import { ContainerActions, ContainerActionTypes } from "./container.action";



export function containerReducers(state: ContainerState = DefaultContainerState, 
    action: ContainerActions): ContainerState {
        switch(action.type) {
            case ContainerActionTypes.LIST_CONTAINER_COMPLETED :
            {
                let currentState = state;
                currentState.containers = action.payload;
                return Object.assign({}, state, currentState);
            }
            case ContainerActionTypes.START_CONTAINER_COMPLETED :
            {
                let currentState = state;
                currentState.containers = action.payload;
                return Object.assign({}, state, currentState);    
            }
            default: 
                return state;
        }
    }