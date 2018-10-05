import { combineReducers } from 'redux';
import signup from './signup.reducer';

const appReducers = combineReducers({
    signup,
});

export default appReducers;