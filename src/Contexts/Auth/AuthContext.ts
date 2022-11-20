import { createContext } from "react";
import { UserTypes } from "../../types/userType";




export type ContextTypeAuth={
    user:UserTypes | null,
    signin:(email:string,password:string)=>Promise<boolean>,
    register:(name:string,email:string,password:string)=>Promise<boolean>
    signout:()=>void
}

export const ContextAuth=createContext<ContextTypeAuth>(null!)