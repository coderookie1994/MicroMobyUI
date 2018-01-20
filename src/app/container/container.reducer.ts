import { ContainerState, DefaultContainerState } from "./models/container.model";
import { ContainerActions, ContainerActionTypes } from "./container.action";



export function containerReducers(state: ContainerState = DefaultContainerState, 
    action: ContainerActions): ContainerState {
        switch(action.type) {
            case ContainerActionTypes.LIST_CONTAINER_COMPLETED :
                return Object.assign({}, state, action.payload);
            case ContainerActionTypes.START_CONTAINER_COMPLETED :
            {
                let currentState = state;
                currentState.Id = action.payload.Id;
                return Object.assign({}, state, currentState);    
            }
            default: 
                return state;
        }
    }