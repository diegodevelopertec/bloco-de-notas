import { ReactNode, createContext,useEffect,useState } from "react";
import { UserTypes } from "../types/userType";
import { User } from "@supabase/supabase-js";
import { ApiUserActions } from "../Services/userActions";



type Props={
    children:ReactNode
}

type AuthType={  
  user:UserTypes | null,
  Login:(email:string,password:string)=>Promise<boolean>
  Register:(email:string,password:string)=>any,
  logout:()=>void
}

export const  Context=createContext<AuthType>(null!)

export const ProviderAuth=({children}:Props)=>{


    useEffect(()=>{
        let userStorage=JSON.parse(localStorage.getItem('u') as string)
        setUser(userStorage)

    },[])

    const [user,setUser]=useState<UserTypes | null>(null)
 
    const Login= async(email:string,password:string)=>{
        let response=await ApiUserActions.createUser(email,password)
        console.log(localStorage.getItem('token'));
     

        if(user){
            let isValid=user.email === email && user.password === password
            if(isValid){
                return true
            }else{
                return false
            }
        }
            


        return false
    }


    const Register= async(email:string,password:string)=>{
        let response= await ApiUserActions.createUser(email,password)
        const {data}=response
        localStorage.setItem('u',JSON.stringify(response.data))
        
        
        if(data){
            return true
        }else{
            return false
        }
    }

    const logout=()=>{
            setUser(null)
    }

    return <Context.Provider value={{user,Login,Register,logout}} >

        {children}
    </Context.Provider>
}

