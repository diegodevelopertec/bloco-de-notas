import { ChangeEvent, useContext, useEffect, useState } from 'react'
import S from './style.module.css'
import {useNavigate} from 'react-router-dom'
//import {Notes} from '../../data/notes'
import {ApiActions} from '../../Api/api'


//types
type Props={
    activateOffModal:()=>void,
}


export const Modal=({activateOffModal}:Props)=>{

//states
const d=new Date()
const [titleInput,setTitleInput]=useState('')
const [contentInput,setNoteContentInput]=useState('')


let navigate=useNavigate()




//functions
const formActions={
    titleContent:(e:ChangeEvent<HTMLInputElement>)=>{
        setTitleInput(e.target.value)
    },
    noteContent:(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setNoteContentInput(e.target.value)
    }
}
const addNote=async ()=>{
   if(titleInput && contentInput){
    let json=await ApiActions.addPostNote(titleInput,contentInput,2)
     activateOffModal()}
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
                    <button onClick={addNote} type='submit' className={S.BtnAdd}>salvar</button>
            </div> 
          
        </div>


</>


}