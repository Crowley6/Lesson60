import FriendsReducer from "./Reducers/FriendsReducer";
import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({
    FriendsData: FriendsReducer
})

let reduxstate = createStore(reducers);


export default reduxstate;