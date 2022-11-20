import { ContextAuth } from "./AuthContext"
import { ReactNode, useState } from "react"
import { UserTypes } from "../../types/userType"
import { useApiAuth } from "../../hooks/useApiAuth"


type Props={
    children:ReactNode
}

export const AuthProvider=({children}:Props)=>{

    const [user,setUser]=useState<UserTypes | null >(null)
    const useAuth=useApiAuth



    const signin=async (email:string,password:string)=>{
        const data=await useApiAuth.singin(email,password)
        if(data.user && data.password){
            setUser(data.user)
            return true
        }else{
            return false
        }

    }
    const signout=async ()=>{
        const data=await useApiAuth.singout()
        setUser(null)



    }

    const register=async (name:string,password:string,email:string)=>{
        const data=await useApiAuth.singin(email,password)
        if(data.user && data.password){
            setUser(data.user)
            return true
        }else{
            return false
        }


    }





    return <ContextAuth.Provider value={{user,signin,signout,register}}>
        {children}
    </ContextAuth.Provider>
}