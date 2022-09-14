import React from "react"
import { useState,useEffect,useRef } from "react"
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { BotaoFixo } from "../../Components/BotaoFixo"
import * as S from './styled'
import { useNotes } from "../../hooks/itemlist"




export const AllNotes=()=>{
     const iconError=<img src="https://img.icons8.com/fluency/96/000000/error.png"/>
     const [list,listDispacth]=useNotes()
     const [onModal,setOnModal]=useState(false)
     const [opacity,setOpacity]=useState(false)
     const [delitem,setDelItem]=useState()


useEffect(()=>{

},[list])

 useEffect(()=>{
        let container=document.getElementById('list-container') as HTMLDivElement
            if(opacity){    
              container.style.opacity='0.5'
             
            }else{
                  container.style.opacity='1'
                
            }
 },[opacity])
    




const clikedView=()=>{



}






const clikedDelete=()=>{
         document.querySelectorAll('.link-lixeira').forEach(item=>{
              item.addEventListener('click',e=>{
             
                
               
            
              })
         })
        
        }





 const actionsModal={
        openModal:()=>{
              setOnModal(true)
              setOpacity(true)

            },
        closeModal:()=>{
              setOnModal(()=>false)
              setOpacity(()=>false)
            
            }
     }
       



return <>
    <S.Main id='list-container'>
          <S.ListContainer className="list-card-container">
            {list.length !== 0 &&   list.map((item,index)=>(
                  <div key={index} >
                      <Card   cardSelectedDelete={clikedDelete}  cardSelectedView={clikedView} id={item.id} title={item.title} content={item.content} data={item.data} />
                  </div>)) 
}
                    { <S.ErrorMensage >
                        <div>
                            <h3> Nenhuma anotação ainda {iconError}</h3>
                        </div>
                     </S.ErrorMensage>
            }
            
          </S.ListContainer>
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
        
       </S.Main>
       <div>
       <S.ContainerModal>
           { onModal && <Modal  activateOffModal={actionsModal.closeModal} />}
            
       </S.ContainerModal>
       </div>
     
    
    </>
}