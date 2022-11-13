import * as S from './style'
import LixeiraImage from '../../assets/images/lixeira.png'
import EditImage from '../../assets/images/edit.png'
import { NotesTypes } from '../../types/notesType'
import {ChangeEvent, useEffect, useState } from 'react'
import {ApiActions} from './../../Api/api'
import {Navigate, useNavigate} from 'react-router-dom'

type Props={
    data:NotesTypes
    closeCardItem:()=>void
}




export const CardItem=({data,closeCardItem}:Props)=>{
  
    const [inputDisable,setInputDisable]=useState(true)
    const [stateTitle,setStateTitle]=useState(data.title)
    const [stateContent,setStateContent]=useState(data.content)

 const deleteNote=async (id:number )=>{
       let request=async ()=>{
            try{
              let json=await ApiActions.delNote(id)
              return json 
            
            }catch(e){
              console.log(e);
              return null
            }
       }
       request()
       closeCardItem()
       
}

const saveNote=async()=>{
  setInputDisable(false)
  let res=await ApiActions.updateNote(stateTitle,stateContent,data.id.toString())
  setInputDisable(true)
  if(stateTitle !== data.title || stateContent !== data.content){
      closeCardItem()
  }
}

    useEffect(()=>{
      deleteNote
     
    },[])

  const EditNote=()=>setInputDisable(false)
  






    return <>
    <S.cardContainer id={data.id.toString()} className="cardItem">
        
        <S.cardData stateInputs={inputDisable}>
            <div className='cx-btn-top'>
                <button onClick={closeCardItem}>voltar</button>
            </div>
           <div>
             <span>
                <input disabled={inputDisable} 
                   id="title-card" 
                   value={stateTitle} 
                   onChange={(e:ChangeEvent<HTMLInputElement>)=>setStateTitle(e.target.value)}
                 />
             </span>
             <span><h3>{data.data}</h3></span>
           </div>
        </S.cardData>
        <S.cardContent stateInputs={inputDisable}>
            <textarea  
               disabled={inputDisable} 
               value={stateContent}
               onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setStateContent(e.target.value)}
               wrap='hard'
             >
              {data.content}
            
            </textarea>
        </S.cardContent>
        <S.ContainerActionsModal >
            {inputDisable && <button className="link-view" onClick={EditNote}  ><img  src={EditImage} alt="" />Editar</button> || 
                  <button className="link-view" onClick={saveNote}  ><img  src={EditImage} alt="" />Salvar</button>
            }
            <button className="link-lixeira"   onClick={()=>deleteNote(data.id)} ><img src={LixeiraImage}  alt="" />Excluir</button>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 </>




}