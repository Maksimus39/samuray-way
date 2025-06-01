import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./reducers/profilereducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {StateType} from "./store";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


const store: StoreType = createStore(reducers);
export type RootState = ReturnType<typeof reducers>;
export type StoreType = Store<StateType>;
export default store
