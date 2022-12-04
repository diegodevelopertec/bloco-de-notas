import { UserTypes } from "../types/userType"
import { BASEURL } from "./notes";
import Cookies from "js-cookie";


export const UserApi={
    Login:async (email:string,password:string)=>{

        let token=Cookies.get('token')
        let req=await fetch(`${BASEURL}/users`,
        {
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'applocation/json',
                'Authorization':`Bearer ${token}`
            }
        })
        let res=await req.json()
       
        console.log(res);
      
        return true

    },
    registro:async (name:string,email:string,password:string):Promise<boolean>=>{
            try{
                
                let req=await fetch(`${BASEURL}users`,
                {
                    method:'POST',
                    body:JSON.stringify({name:name,email:email,password:password}),
                    headers:{
                        'Content-Type':'applocation/json',
                    
                    }
                })
                let res=await req.json()
                let token:string=res.accessToken
                let user=Cookies.set('user',JSON.stringify({name,email,password}))
                console.log(token);
                console.log(user);
                console.log(res);
                return true
            }catch(e){
             
                console.log(e);
                return false
              
            }





    }
   
}