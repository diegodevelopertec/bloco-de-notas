import { Context } from "react";
import { ReactNode,useState } from "react";
import { ContextAuth } from "./AuthContext";
import { UserTypes } from "../types/userType";
import { ApiUserActions } from "../Services/userActions";


type Props={
    children:ReactNode
}


export const AuthProvider=({children}:Props)=>{
    const [user,setUser]=useState<UserTypes | null>(null)
    const [token,setToken]=useState(null)

    const SignIn=async(email:string,password:string)=>{
      
        const data=await ApiUserActions.registerUser(email,password)
        if(data.user === user){
            setUser(data.user)
            setToken(data.token)
            return true
        }
        return false
    }
    const SingOut=()=>{
            setUser(null)
    }
    const RegisterUser=async (email:string,password:string)=>{
        const data=await ApiUserActions.registerUser(email,password)
        if(user === data.user){
            return false
        }
        setUser(user)
        setToken(token)
        return true
    }


    return <ContextAuth.Provider value={{user,SignIn,SingOut,RegisterUser}}>
        {children}
    </ContextAuth.Provider>
}