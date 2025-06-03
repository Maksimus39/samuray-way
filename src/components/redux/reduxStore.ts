import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./reducers/profilereducer";
import {dialogsReducer, StateType} from "./reducers/dialogsReducer";


const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})


const store: StoreType = createStore(rootReducers);
export type AppRootState = ReturnType<typeof rootReducers>;
export type StoreType = Store<StateType>;
export default store
