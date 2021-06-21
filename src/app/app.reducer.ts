interface State {
    isLoading: boolean;
}

const initialState = {
    isLoading: false
};

export function appReducer(state = initialState, action) {
    switch (action.type){
        case 'START_LOADING':
            return {
                isLoading: true
            }
        case 'STOP LOADING':
            return {
                isLoading: false
            }
            
    return state;
    }
    
    
}