import * as S from './style'
import LixeiraImage from '../../assets/images/lixeira.png'
import EditImage from '../../assets/images/edit.png'
import { NotesTypes } from '../../types/notesType'
import {useState } from 'react'
import {ApiActions} from './../../Api/api'


type Props={
    data:NotesTypes
    closeCardItem:()=>void
}




export const CardItem=({data,closeCardItem}:Props)=>{
    const [inputDisable,setInputDisable]=useState(true)

    const deleteNote=async (id:number )=>{
        try{
          let json=await ApiActions.delNote(id)
          closeCardItem()
           return json
         
        }catch(e){
          console.log(e);
        return null
        }
    
       
    }


    const EditNote=()=>{
        setInputDisable(false)


  }

  const saveNote=()=>{
    setInputDisable(true)
  }




    return <>
    <S.cardContainer id={data.id.toString()} className="cardItem">
        <S.cardData stateInputs={inputDisable}>
            <span><input disabled={inputDisable} id="title-card" value={data.title}></input></span>
            <span><h3>{data.data}</h3></span>
        </S.cardData>
        <S.cardContent stateInputs={inputDisable}>
            <textarea disabled={inputDisable} name="" id="" value={data.content}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal >
            {inputDisable && <button className="link-view" onClick={EditNote}  ><img  src={EditImage} alt="" />Editar</button> || 
                  <button className="link-view" onClick={saveNote}  ><img  src={EditImage} alt="" />salvar</button>
            }
            <button className="link-lixeira"   onClick={()=>deleteNote(data.id)} ><img src={LixeiraImage}  alt="" />Excluir</button>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 </>




}