import { useReducer } from "react";
import  {v4 as uuidv4} from 'uuid'
import  { ActionGeralType} from '../types/ActionGeralTypes'


export type InitialStateType={
    id?:string,
    title:string,
    content:string,
    date:string

}


let d=new Date()


export const notesInitialState:InitialStateType[]=[
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Desenvolvimento web',content:'estou estudando dev web',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Mongoose',content:'estou estudando mongo js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda css',content:'estou estudando css',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Node',content:'estou estudando node js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Desenvolvimento web',content:'estou estudando dev web',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Desenvolvimento web',content:'estou estudando dev web',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Mongoose',content:'estou estudando mongo js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda css',content:'estou estudando css',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Node',content:'estou estudando node js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda Desenvolvimento web',content:'estou estudando dev web',date:d.toLocaleDateString()},
    {id:uuidv4(),title:'aprenda React',content:'estou estudando react js',date:d.toLocaleDateString()},
]


export const notesReducer=(state:InitialStateType[],action:ActionGeralType)=>{

    switch(action.type){
        case 'add':

        if(action.payload.title && action.payload.content){
            let newState=[...state]
            newState.push({
                id:uuidv4(),
                title:action.payload.title,
                content:action.payload.content,
                date:d.toLocaleDateString()
            })
            return  newState
       }
        break;
          case 'del':
            if(action.payload.id){
                let newState=[...state]
                newState=newState.filter(item=>item.id !== action.payload.id)
                return newState
            }
         break;
        case 'order':
            let newState=[...state]
            newState=newState.sort((a,b)=>(a.title > b.title) ? 1 : -1)
            return newState
            break;
           
          

    }
    

    return state
}




