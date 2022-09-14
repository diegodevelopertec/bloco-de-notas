import { Action } from "history";
import { useReducer } from "react";


export type List={
    id:number ,
    title:string,
    content:string,
    data:string
}




const initialState:List[]=[]

type Actions={
   type:string,
   payload?:{
        id:number,
        title:string,
        content:string,
        data:string
   }
}
const reducer=(state:List[],action:Actions)=>{
switch(action.type){
    case 'add':
        if(action.payload?.id){
            const newState=[...state]
            newState.push({
                id:action.payload.id,
                title:action.payload.title,
                content: action.payload.content,
                data:action.payload.data
            })
            return newState
        }
      
        break;
    case 'delete':
        if(action.payload?.id){
            let  newState=[...state]
             newState=newState.filter(item=>item.id !== action.payload?.id)
            return newState
        }

        break;
    case 'view':
        if(action.payload?.id){
            let  newState=[...state]
             newState=newState.filter(item=>item.id === action.payload?.id)
            return newState
        }
      break;




}





    return state
}



export const useNotes=()=>{

return useReducer(reducer,initialState)



}