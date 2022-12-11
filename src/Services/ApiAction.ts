import { supabase } from "./ApiConfig"

export const ApiActions={
    getAllNotes: async ()=>{
       
        let { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        
    },
    addPostNote:async(title:string,content:string,usersId:number)=>{
              
               
    },
    delNote:async(id:number)=>{
        if(id){
          
          
        }
    },
    updateNote:async(title:string,content:string,id:string)=>{
        
    }
}