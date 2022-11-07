import React, { ReactComponentElement, useState } from "react"
import { Link } from "react-router-dom"
import * as S from './style'
import ViewImage from '../../assets/images/view.png'
import LixeiraImage from '../../assets/images/lixeira.png'
import {ApiActions} from '../../Api/api'

type Props ={
    id?:any,
    title:string,
    content:string,
    data:string,
   clickDelete:()=>void,
 
  
}
export const Card=({title,content,data,clickDelete}:Props)=>{


  
    return <>
    <S.cardContainer className="cardItem">
        <S.cardData>
            <span><h3 id="title-card">{title}</h3></span>
            <span><h3>{data}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={content}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal>
            <a className="link-view"   ><img  src={ViewImage} alt="" /></a>
            <a className="link-lixeira"  onClick={clickDelete} ><img src={LixeiraImage} alt="" /></a>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 



    </>
}