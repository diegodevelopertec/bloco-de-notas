import {notesReducer,InitialStateType,notesInitialState} from '../reducer/useNote'
import { createContext, ReactNode, useReducer } from 'react'
import { ActionGeralType } from '../types/ActionGeralTypes'



type Props={
    children:ReactNode
}

type ContextType={
    state:InitialStateContext,
    dispatch:React.Dispatch<any>
}

type InitialStateContext={
    notes:InitialStateType[],
   
}

let initialStateContext={
    notes:notesInitialState
}

export const Context=createContext<ContextType>({
    state: initialStateContext,
    dispatch:()=>null
})

const mainReducer=(state:InitialStateContext,action:ActionGeralType)=>({
    notes:notesReducer(state.notes,action)
})



export const ContextProvider=({children}:Props)=>{
const [state,dispatch]=useReducer(mainReducer,initialStateContext)

return (
    <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
)

}