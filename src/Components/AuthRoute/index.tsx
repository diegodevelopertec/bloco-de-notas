import { ReactNode } from "react"
import {Navigate} from 'react-router-dom'


type Props={
   children:JSX.Element
}
export const AuthPrivate=({children}:Props)=>{
   
    const token=true
    if(!token){
      return  <Navigate to='/' />
       
    }
   return children
}