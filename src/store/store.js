import {createStore, applyMiddleware, compose} from "redux";
import usersRuducers from "../reducers/usersReducer";
import firebase from '../firebase/config';
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from 'redux-thunk';

const Store = createStore(usersRuducers, compose(
    applyMiddleware(thunk.withExtraArgument({
        getFirebase,getFirestore
    })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
))

export default Store;