
let BASEURL='http://localhost:3000/'

export const ApiActions={
        getAllNotes: async ()=>{
            let response=await fetch(`${BASEURL}notes`)
            let json=await response.json()
            return json
        },
        addPostNote:async(title:string,content:string,usersId:number)=>{
                    let response=await fetch(`${BASEURL}notes`,{
                        method:'POST',
                    body:JSON.stringify({
                        usersId,
                        title,
                        content
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    } })

                    let json=await response.json()
                    return json
        }
        ,
        delNote:async(id:number)=>{
            if(id){
                let response=await fetch(`${BASEURL}notes/${id}`,{
                    method:'DELETE',
                })
                let json=await response.json()
                return json
            }
        }
}