import { ReactNode } from "react"
import {Navigate, useNavigate} from 'react-router-dom'
import { useAuth } from "../../hooks/useAuth"

type Props={
   children:JSX.Element
}

export const AuthPrivate=({children}:Props)=>{
      let redirect=useNavigate()
      let {user}=useAuth()
 
      if(!user){
        redirect('/login')
      }
  

      return children



}