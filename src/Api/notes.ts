
export let BASEURL='http://localhost:3000/'
import axios from 'axios'


export const ApiActions={
        getAllNotes: async ()=>{
            let response=await axios.get(`${BASEURL}notes`)
            return response.data
        },
        postNote:async(title:string,content:string,usersId:number)=>{
                    let response=await axios.post(`${BASEURL}notes`,{usersId,title,content})
                    return response.data
                   
        },
        delNote:async(id:number)=>{
            if(id){
                let response=await axios.delete(`${BASEURL}notes/${id}`)
                return  response.data
              
            }
        },
        updateNote:async(title:string,content:string,id:string)=>{
            let response=await axios.put(`${BASEURL}notes/${id}`,{  title,content})
            return response.data

        }
}