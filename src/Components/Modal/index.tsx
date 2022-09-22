import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Context } from '../../contexts/context'
import { useNotes } from '../../hooks/itemlist'
import S from './style.module.css'
//import {Notes} from '../../data/notes'



//types
type Props={
    activateOffModal:()=>void,
   
}


export const Modal=({activateOffModal}:Props)=>{

//states
const d=new Date()
const [titleInput,setTitleInput]=useState('')
const [contentInput,setNoteContentInput]=useState('')
const [error,setError]=useState(false)
const {state,dispatch}=useContext(Context)





//functions
const formActions={
    titleContent:(e:ChangeEvent<HTMLInputElement>)=>{
        setTitleInput(e.target.value)
    },
    noteContent:(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setNoteContentInput(e.target.value)
    }
}
const addNote=()=>{

    if(titleInput && contentInput){
        dispatch({
            type:'add',
            payload:{
                title:titleInput,
                content:contentInput
            }
        })
    activateOffModal()
   }
    }



return <>
        <div className={S.modalContainer}>
            <div className={S.modalData}>
                <div className={S.dataTitle}>
                    <div className={S.title}>Titulo</div>
                  <div className={S.cxInput}>  <input  type="text" placeholder='Titulo da anotação' value={titleInput} onChange={formActions.titleContent} maxLength={19}  /></div>
                </div>
                <div className={S.dataContent}>
                    <span>Anotação</span>
                    <textarea name="" id="" placeholder='Digite algo...' value={contentInput} onChange={formActions.noteContent} ></textarea>
                </div>
            </div>
            <div className={S.modalButtons}>
                    <button onClick={activateOffModal} className={S.BtnCancel}>cancelar</button>
                    <button onClick={addNote} className={S.BtnAdd}>salvar</button>
            </div> 
        </div>


</>


}