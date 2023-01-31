
import { UserTypes } from "../types/userType";
import { Api } from "./ApiConfig";

export const ApiUserActions={


    createUser: async (email:string,password:string)=>{
      let response=await Api.post('user',{email,password})
       return response


    },
    LoginUser:async (email:string,password:string)=>{
        let response=await Api.get('user')
        return response
 

    },
    validateToken:async (token:string)=>{
        let response=await Api.post(token)
        return response.data
 




    }





}