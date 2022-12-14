import {createContext} from 'react'
import { UserTypes } from '../types/userType'


export type AuthType={
    user: UserTypes | null,
    SignIn:(email:string,password:string)=>Promise<boolean>,
    SingOut:()=>void,
    RegisterUser:(email:string,password:string)=>Promise<boolean>
}


export  const ContextAuth=createContext<AuthType>(null!)