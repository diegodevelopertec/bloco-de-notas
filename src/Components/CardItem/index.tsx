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
    const [inputDisbale,setInputDisable]=useState(true)

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







    return <>
    <S.cardContainer id={data.id.toString()} className="cardItem">
        <S.cardData>
            <span><input disabled id="title-card" value={data.title}></input></span>
            <span><h3>{data.data}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={data.content}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal>
            <button className="link-view"  ><img  src={EditImage} alt="" /></button>
            <button className="link-lixeira"   onClick={()=>deleteNote(data.id)} ><img src={LixeiraImage}  alt="" /></button>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 </>




}