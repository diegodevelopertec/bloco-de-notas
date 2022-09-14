import { ChangeEvent, useEffect, useState } from 'react'
import { useNotes } from '../../hooks/itemlist'
import S from './style.module.css'
//import {Notes} from '../../data/notes'



//types
type Props={
    activateOffModal:()=>void,
   
}


export const Modal=({activateOffModal}:Props)=>{

//variables
const d=new Date()
const [titleInput,setTitleInput]=useState('')
const [contentInput,setNoteContentInput]=useState('')
const [error,setError]=useState(false)
const [list,listDispacth]=useNotes()





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
   if(list){
    listDispacth({
        type:'add',
        payload:{
          id:Math.floor(Math.random() * 300),
          title:titleInput,
          content: contentInput,
          data:d.toLocaleDateString()
        }
       
    })
    activateOffModal()
   }
    
  
  
  
  
  
   }
/*
const addNewNote=()=>{
   /* if(title && content){
  
        let item={
            id:Notes.length + 1,
            content,title,
            data:d.toLocaleDateString()
        }

        Notes.unshift(item)
        console.log(Notes);
        activateOffModal()
        
    }else{
      alert('Todos os campos devem ser Preenchidos')
    }


}
*/

return <>
        <div className={S.modalContainer}>
            <div className={S.modalData}>
                <div className={S.dataTitle}>
                    <div className={S.title}>Titulo</div>
                  <div className={S.cxInput}>  <input  type="text" value={titleInput} onChange={formActions.titleContent}  /></div>
                </div>
                <div className={S.dataContent}>
                    <span>Anotação</span>
                    <textarea name="" id=""  value={contentInput} onChange={formActions.noteContent} ></textarea>
                </div>
            </div>
            <div className={S.modalButtons}>
                    <button onClick={activateOffModal} className={S.BtnCancel}>cancelar</button>
                    <button onClick={addNote} className={S.BtnAdd}>salvar</button>
            </div> 
        </div>


</>


}