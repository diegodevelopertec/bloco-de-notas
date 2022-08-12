import { ChangeEvent, useState } from 'react'
import S from './style.module.css'


export const Modal=()=>{
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


console.log(title)
console.log(content);


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
                    <button className={S.BtnCancel}>cancelar</button>
                    <button className={S.BtnAdd}>cancelar</button>
            </div>
            
        </div>


</>


}