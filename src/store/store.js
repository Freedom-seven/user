import {createStore} from "redux";
import usersRuducers from "../reducers/usersReducer";

const Store = createStore(usersRuducers)

export default Store