import React, { useContext } from "react"
import { useState,useEffect } from "react"
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { BotaoFixo } from "../../Components/BotaoFixo"
import * as S from './styled'
import { CardItem } from "../../Components/CardItem"
import errorImageIcons from '../../assets/images/error.png'
import { NotesTypes } from "../../types/notesType"
import {ApiActions} from '../../Api/api'
import { LoginPage } from "../Login/login"

export const AllNotes=()=>{
  //STATES
  const [onModal,setOnModal]=useState(false)
  const [opacity,setOpacity]=useState(false)
  const [notes,setNotes]=useState<NotesTypes[]>([])

  //EFFECTS
 useEffect(()=>{
  loadNotes()

 })
    
 //Functions
  const deleteNote=async (id:number )=>{
      try{
        let json=await ApiActions.delNote(id)
         return json
      }catch(e){
      console.log(e);
      
      }
  }

  const loadNotes=async()=>{
    let json=await ApiActions.getAllNotes()
    setNotes(json)
  }

  const actionsModal={
          openModal:()=>{
                setOnModal(true)
                setOpacity(true)

              },
          closeModal:()=>{
                setOnModal(false)
                setOpacity(false)
              
              }
      
  }

return <>
    <S.Main id='list-container'>
          <S.ListContainer opacityCondition={opacity} className="list-card-container">
            {notes.length !== 0 ?   notes.map((item,index)=>(
                  <div key={index} >
                      <Card clickDelete={()=>{deleteNote(item.id)}} info={item} />
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
       {onModal && <S.ContainerModal>
           { onModal && <Modal  activateOffModal={actionsModal.closeModal} />}
       </S.ContainerModal>}
     
      
     
    
    </>
}


