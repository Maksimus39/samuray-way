import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profilereducer";
import {dialogsReducer} from "./reducers/dialogsReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})



const store = createStore(reducers);
export type RootState = ReturnType<typeof reducers>;

export default store

