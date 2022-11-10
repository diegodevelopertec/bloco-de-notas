import React, { ReactComponentElement, useState } from "react"
import { Link } from "react-router-dom"
import * as S from './style'
import ViewImage from '../../assets/images/view.png'
import LixeiraImage from '../../assets/images/lixeira.png'
import {ApiActions} from '../../Api/api'
import {NotesTypes} from '../../types/notesType'

type Props ={
   info:NotesTypes,
   clickDelete:()=>void,
   onClick:(data:NotesTypes)=>void
 
  
}
export const Card=({info,clickDelete,onClick}:Props)=>{

    const clickReturnData=()=>{
        onClick(info)
    }

  
    return <>
    <S.cardContainer  className="cardItem">
        <S.cardData>
            <span><h3 id="title-card">{info.title}</h3></span>
            <span><h3>{info.data}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={info.content}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal>
            <a className="link-view" onClick={clickReturnData}  ><img  src={ViewImage} alt="" /></a>
            <a className="link-lixeira"  onClick={clickDelete} ><img src={LixeiraImage} alt="" /></a>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 



    </>
}