import { ReactNode } from "react"
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'



type Props={
   children:JSX.Element
}
export const AuthPrivate=({children}:Props)=>{
   
   let token=true
  
    if(!token){
      return  <Navigate to='/' />
    }
   return children
}