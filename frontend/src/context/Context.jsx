import { createContext, useEffect, useReducer, useState } from "react";
import { Reducer } from "./Reducer";


//initial state
const initial_state ={
    use: localStorage.getItem('user') || null,
}

//create a context
export const context = createContext(initial_state);

//provider context
export const contextProvider = ({children}) =>{
    const [state ,dispatch] = useReducer(Reducer, initial_state);
    const [USER, setUSER] = useState('')

    useEffect(() =>{
      setUSER  (localStorage.setItem("user", JSON.stringify(state.user)))
    }, [state.user])

    return(
        <context.Provider value={{user : state.user, dispatch , USER,setUSER}}>
            {children}
        </context.Provider>
    )
}