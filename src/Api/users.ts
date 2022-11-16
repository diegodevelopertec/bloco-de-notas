import { UserTypes } from "../types/userType"
import { BASEURL } from "./notes";
import Cookies from "js-cookie";

export const UserApi={


    loginUser:async(data:UserTypes)=>{
        try{
            let token
            if(!token){
            
                let req=await fetch(`${BASEURL}`,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${Cookies.get('token')}`
                    }
                })
        
            }

        }catch(e){
            console.log(e);
            
        }



    },
    registerUser:async(data:UserTypes)=>{
        try{
            let token
            if(!token){
            
                let req=await fetch(`${BASEURL}`,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${Cookies.get('token')}`
                    }
                    
                })

                let res=await req.json()
                   token=res.acessToken
        
            }

        }catch(e){
            console.log(e);
            
        }








    }


}