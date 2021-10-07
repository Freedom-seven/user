import usersReducers from "./usersReducer";
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';

export default combineReducers({
    usersState: usersReducers,
    firebase: firebaseReducer,
});