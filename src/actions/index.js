import * as Types from './../constants/ActionType';
import NodeAPI from './../utils/node-api';

export const actionSignUpReq = (user) => {
    return (dispatch) => {
        return NodeAPI('POST', 'auth/signup', user).then(res => {
            dispatch(actionSignUp(res));
        })
    }
}

const actionSignUp = message => {
    return {
        type: Types.SIGN_UP,
        message
    }
}