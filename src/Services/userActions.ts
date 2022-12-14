
import { UserTypes } from "../types/userType";
import { Api } from "./ApiConfig";

export const ApiUserActions={


    registerUser: async (email:string,password:string)=>{
      let response=await Api.post('notes',{email,password})
       return response.data


    },
    LoginUser:async (email:string,password:string)=>{
        let response=await Api.post('login',{email,password})
        return response.data
 

    },
    validateToken:async (token:string)=>{
        let response=await Api.post(token)
        return response.data
 




    }





}