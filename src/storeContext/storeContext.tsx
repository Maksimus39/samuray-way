import React from "react";
import store, {StoreType} from "../components/redux/reduxStore";


// Создаем контекст с начальным значением
const StoreContext = React.createContext<StoreType>(store);

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}


export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext