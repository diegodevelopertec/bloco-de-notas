import axios from 'axios'


export let BASEURL='http://localhost:3000/'

const api=axios.create({
   baseURL:BASEURL
}
)

export const useApiAuth={

    validateToken:async (token:string)=>{
        const response= await axios.post('/users',{token})
        return  response.data



    },
    singin:async (email:string,password:string)=>{
        const response=await axios.post('/users',{
            email,password
        })
        return response.data



    },
    singout:async ()=>{
        const response=await axios.post('/logout')
        return response.data



    },
    register:async(name:string,email:string,password:string)=>{
        const response=await axios.post('/register',{
            name,email,password
        })
        return response.data
    }

}