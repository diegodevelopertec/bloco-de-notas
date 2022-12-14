import { Api } from "./ApiConfig"

export const ApiActions={
        getAllNotes: async ()=>{
            let response=await Api.get(`notes`)
            return response.data
        },
        postNote:async(title:string,content:string,usersId:number)=>{
                    let response=await Api.post(`notes`,{usersId,title,content})
                    return response.data
                   
        },
        delNote:async(id:number)=>{
            if(id){
                let response=await Api.delete(`notes/${id}`)
                return  response.data
              
            }
        },
        updateNote:async(title:string,content:string,id:string)=>{
            let response=await Api.put(`notes/${id}`,{  title,content})
            return response.data

        }
}