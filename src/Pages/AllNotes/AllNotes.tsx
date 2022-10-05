import React, { useContext } from "react"
import { useState,useEffect } from "react"
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { BotaoFixo } from "../../Components/BotaoFixo"
import * as S from './styled'
import { Context } from "../../contexts/context"
import { CardItem } from "../../Components/CardItem"
import errorImageIcons from '../../assets/images/error.png'


export const AllNotes=()=>{
  
 

  //States
  const {state,dispatch}=useContext(Context)
  const [onModal,setOnModal]=useState(false)
  const [opacity,setOpacity]=useState(false)
  const [onCardView,setCardView]=useState(false)

//Effects
 useEffect(()=>{
        let container=document.getElementById('list-container') as HTMLDivElement
            if(opacity){    
              container.style.opacity='0.5'
              deleteNote('')
             
            }else{
                  container.style.opacity='1'
                  OrderList() 
            }
 },[opacity])
    


     //Functions

const OrderList=()=>{
  dispatch({
    type:'order'
  })

  }


  const cardCliked=(id:string)=>{
    dispatch({
      type:'viewNote',
     payload:({
      id
     })
    })
   

  }
  
const deleteNote=(id:string )=>{
  dispatch({
      type:'del',payload:{id}
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
            {state.notes.length !== 0 ?   state.notes.map((item:any,index:any)=>(
                  <div key={index} >
                      <Card clikedView={()=>cardCliked(item.id)} clickDelete={()=>{onModal ? ()=>null : deleteNote(item.id)}}      title={item.title} content={item.content} data={item.date} />
                  </div>)) 
                    :
                    <S.ErrorMensage >
                        <div>
                            <h3> Nenhuma anotação ainda <img src={errorImageIcons} alt="" /></h3>
                        </div>
                     </S.ErrorMensage>
            }
            
          </S.ListContainer>
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
        
       </S.Main>
       <div>
       <S.ContainerModal>
           { onModal && <Modal  activateOffModal={actionsModal.closeModal} />}
            {/*<CardItem titleCard={}  contentCard="svhshd" dateCard="bsgh"/>*/}
       </S.ContainerModal>
       </div>
     
    
    </>
}


