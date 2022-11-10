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
  const [activeModalContainer,setActiveModalContainer]=useState(false)
  const [dataModalEdit,setDataModalEdit]=useState<NotesTypes | any>()
  const [visibleModalEdit,setVisibleModalEdit]=useState(false)
  
  //EFFECTS
 useEffect(()=>{
  loadNotes()

 },[notes])
    
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
          openModal:()=>{setActiveModalContainer(true,),setOnModal(true) , setOpacity(true) },
          closeModal:()=>{setActiveModalContainer(false), setOnModal(false) , setOpacity(false)}
  }


const returnDataModalEdit=(data:NotesTypes)=>{
  setDataModalEdit(data)
  setOpacity(true)
  setVisibleModalEdit(true)
  setActiveModalContainer(true)
  
}

const removeModals=()=>{
  setOpacity(false)
  setVisibleModalEdit(false)
  setActiveModalContainer(false)
}

return <>
    <S.Main id='list-container'>
          <S.ListContainer opacityCondition={opacity} className="list-card-container">
            {notes.length !== 0 ?   notes.map((item,index)=>(
                  <div key={index} >
                      <Card 
                        clickDelete={()=>{deleteNote(item.id)}} 
                         info={item} 
                         onClick={returnDataModalEdit}
                         />
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
       {activeModalContainer && <S.ContainerModal >
           { onModal && <Modal  activateOffModal={actionsModal.closeModal} />}
           {visibleModalEdit ?  <CardItem  closeCardItem={removeModals} data={dataModalEdit} /> : null}
       </S.ContainerModal>}
     
      
    
    
    </>
}


