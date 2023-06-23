import { createContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";


//initial state
const initial_state ={
    use: JSON.parse(localStorage.getItem('user')) || null,
}

//create a context
export const context = createContext(initial_state);

//provider context
export const contextProvider = ({children}) =>{
    const [state ,dispatch] = useReducer(Reducer, initial_state);

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return(
        <context.Provider value={{user : state.user, dispatch}}>
            {children}
        </context.Provider>
    )
}