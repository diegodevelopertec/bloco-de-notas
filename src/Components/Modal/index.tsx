import { ChangeEvent, useState } from 'react'
import S from './style.module.css'
import {ApiActions} from '../../Services/notes'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';

type Props={activateOffModal:()=>void}


export const Modal=({activateOffModal}:Props)=>{
    const navigate=useNavigate()
    //states
    const d=new Date()
    const [titleInput,setTitleInput]=useState('')
    const [contentInput,setNoteContentInput]=useState('')



    //functions

    const addNote=async ()=>{
        if(titleInput && contentInput){
            let json=await ApiActions.postNote(titleInput,contentInput,2)
            activateOffModal()
            navigate('/')
            toast.success('Anotação criada com sucesso')
        }else{
          toast.error('Todos os campos devem ser preenchidos')
        }
        
    }



return <>
        <div className={S.modalContainer}>
        
           <div className={S.modalData}>
                <div className={S.dataTitle}>
                    <div className={S.title}>Titulo</div>
                  <div className={S.cxInput}> 
                        <input  type="text" 
                            placeholder='Titulo da anotação' 
                            value={titleInput} 
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>setTitleInput(e.target.value)} 
                            maxLength={19}
                        />
                    </div>
                </div>
                <div className={S.dataContent}>
                    <span>Anotação</span>
                    <textarea className="textarea" id="" 
                        placeholder='Digite algo...' 
                        value={contentInput} 
                        onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>setNoteContentInput(e.target.value)} >
                    </textarea>
                </div>
            </div>
            <div className={S.modalButtons}>
                    <button onClick={activateOffModal} className={S.BtnCancel}>cancelar</button>
                   <button  onClick={addNote} type='submit' className={S.BtnAdd}>salvar</button>
            </div> 
          
        </div>


</>


}