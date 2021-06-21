import { CurrentUser } from "../interface/current-user";
import * as AppAction from  "./app.action"


const initialState: CurrentUser = {
    IdUser: 0,
    IsLogged: false
};

export function appReducer(state = initialState, action: AppAction.LogIn) {    
    switch (action.type){
        case AppAction.LOG_IN:
            return {
                ...state, 
                initialState: [state, action.payload]               
            }            
    default: 
        return state;
    }  
}