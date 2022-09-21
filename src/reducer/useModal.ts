

import { useReducer } from "react";
import  {v4 as uuidv4} from 'uuid'
import  { ActionGeralType} from '../types/ActionGeralTypes'


export type InitialStateTypeModal={
    stateModal:boolean

}





export const modalInitialState={stateModal:false}


export const modalReducer=(state:InitialStateTypeModal,action:ActionGeralType)=>{

    switch(action.type){
        case 'visible':
          return {...state,visible:action.payload.stateModal}
           
        break;
          case 'oculto':
            return {...state,oculto:action.payload.oculto}
          
    }

    return state
}




