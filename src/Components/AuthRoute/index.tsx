import { ReactNode } from "react"
import {Navigate} from 'react-router-dom'
import {useContext} from 'react'

type Props={
   children:JSX.Element
}
export const AuthPrivate=({children}:Props)=>{
   let user={
      password:'',
      email:''
   }


   if(user.email !== ''){
      return children
   }

   return <Navigate  to='/' />
}