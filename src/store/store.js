import {createStore, applyMiddleware, compose} from "redux";
import reducer from "../reducers/mainReducer";
import firebase from '../firebase/config';
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from 'redux-thunk';

const Store = createStore(reducer, compose(
    applyMiddleware(thunk.withExtraArgument({
        getFirebase,getFirestore
    })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
))

export default Store;