import { useReducer } from "react"
import {InitialStateNoteType} from './useNote'


type ActionCardNote={

  type:string,
  payload?:{
    id:string,
    title:string,
    content:string,
    date:string
  }
}


const cardModalInitialState:InitialStateNoteType={
  id:'',
  title:'',
  content:'',
  date:''
}




const reducer=(state:InitialStateNoteType,action:ActionCardNote)=>{

  switch(action.type){

      case 'return data':
        return {...state}
  }
  return state
}



export const useCardClikedModal=()=>{
  return useReducer(reducer,cardModalInitialState)


}

