import { createContext, useEffect, useReducer } from "react";
import Reducer  from "./Reducer";


//initial state
const initial_state ={
    user: localStorage.getItem("user") || null
}

//create a context
export const Context = createContext(initial_state);

//provider context
export const ContextProvider = ({ children }) =>{
    const [state ,dispatch] = useReducer(Reducer, initial_state);
    useEffect(() =>{
       localStorage.setItem("user", JSON.stringify(state.user))
    //    console.log(state.user)
    }, [state.user])

    return(
        <Context.Provider value={{user : state.user, dispatch }}>
            {children}
        </Context.Provider>
    )
}