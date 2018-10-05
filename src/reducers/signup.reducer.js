import * as Types from './../constants/ActionType';

var initialState = [];

const signup = (state = initialState, action) => {
    switch (action.type) {
        case Types.SIGN_UP:
        
            return [...state]
            
        default:
            return [...state]
    }
}

export default signup;