import { UserTypes } from "../types/userType"
import { BASEURL } from "./notes";
import Cookies from "js-cookie";

export const UserApi={

    loginUser:async(data:UserTypes)=>{
     
            if(!data.token){
                let token=Cookies.get('token')
                if(token){
                    data.token=token
                }
            }
    
            let req=await fetch(`${BASEURL}`,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':`Bearer ${Cookies.get('token')}`
                    }
           })
           let res =await req.json()

        if(res.notallowed){
                window.location.href='/'
                return 
        }

            return res
    



    },
    registerUser:async(data:UserTypes)=>{
      
                if(!data.token){
                    let token=Cookies.get('token')
                    if(token){
                        data.token=token
                    }
                }
            
                let req=await fetch(`${BASEURL}`,{
                    method:'POST',
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type':'application/json',
                        
                    }
                    
                })

                let res=await req.json()
                 return res
        
            









    }


}