import { ChangeEvent, useEffect, useState } from 'react'
import S from './style.module.css'
import {Notes} from '../../data/notes'

type Props={
    activateOffModal:()=>void;

}


export const Modal=({activateOffModal}:Props)=>{
const d=new Date()
const [title,setTitle]=useState('')
const [content,setNoteContent]=useState('')






const formActions={
    titleContent:(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value)
    },
    noteContent:(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setNoteContent(e.target.value)
    }
}


const addNewNote=()=>{
    if(title && content){
        let newItem={
            id:Notes.length+1,
            title,
            content,
            data:d.toLocaleDateString()
        }
        Notes.unshift(newItem)
        console.log(Notes);
        activateOffModal()
        
    }else{
        alert('Todos os campos devem estar preenchidos')
    }


}

return <>
        <div className={S.modalContainer}>
            <div className={S.modalData}>
                <div className={S.dataTitle}>
                    <span>Title</span>
                    <input type="text" value={title} onChange={formActions.titleContent}  />
                </div>
                <div className={S.dataContent}>
                    <span>Anotação</span>
                    <textarea name="" id=""  value={content} onChange={formActions.noteContent} ></textarea>
                </div>
            </div>
            <div className={S.modalButtons}>
                    <button onClick={activateOffModal} className={S.BtnCancel}>cancelar</button>
                    <button onClick={addNewNote} className={S.BtnAdd}>salvar</button>
            </div> 
        </div>


</>


}