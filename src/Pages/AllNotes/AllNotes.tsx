import React from "react"
import { useState,useEffect,useRef } from "react"
import { Notes } from "../../data/notes"
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { BotaoFixo } from "../../Components/BotaoFixo"
import * as S from './styled'




export const AllNotes=()=>{
     const iconError=<img src="https://img.icons8.com/fluency/96/000000/error.png"/>
    const [list,setListOfNotes]=useState(Notes)
     const [onModal,setOnModal]=useState(false)
     const [opacity,setOpacity]=useState(false)
      let [onView,setOnView]=useState(false)





  
const  clikedView=()=>{
      document.querySelectorAll('.link-view').forEach(item=>{
      item.addEventListener('click',e=>{
   
        let text=item.closest('textarea')?.innerText
        console.log(text);
        
      
        
   
        

      })

      })
     }
  

 const CardClikedItem=()=>{
return <>{clikedView}</>



  }

useEffect(()=>{
  clikedView()
}

,[clikedView])




const clikedDelete=()=>{
         document.querySelectorAll('.link-lixeira').forEach(item=>{
              item.addEventListener('click',e=>{
                let a=e.target as HTMLLinkElement
               let titleCard=a.closest('#title-card')?.innerHTML
               console.log(titleCard);
               
                



              })
         })
          setOnView(false)
        }

useEffect(()=>{
    let container=document.getElementById('list-container') as HTMLDivElement
        if(opacity){    
          container.style.opacity='0.5'
         
        }else{
              container.style.opacity='1'
            
        }
},[opacity])



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
            { list.length !== 0 ?  list.map((item,index)=>(
                  <div key={index} >
                      <Card   cardSelectedDelete={clikedDelete}  cardSelectedView={clikedView} id={item.id} title={item.title} content={item.content} data={item.data} />
                  </div>)) 
                  :
                     <S.ErrorMensage >
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
           { onModal && <Modal activateOffModal={actionsModal.closeModal} />}
        
       </S.ContainerModal>
       </div>
     
    
    </>
}