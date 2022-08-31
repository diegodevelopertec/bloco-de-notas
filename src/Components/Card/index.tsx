import React, { ReactComponentElement, useState } from "react"
import { Link } from "react-router-dom"
import * as S from './style'
import ViewImage from '../../assets/images/view.png'
import LixeiraImage from '../../assets/images/lixeira.png'

type Props ={
    id:number,
    title:string,
    content:string,
    data:string,
    cardSelectedView:()=>void,
    cardSelectedDelete:()=>void,
  
}
export const Card=({id,title,content,data,cardSelectedDelete,cardSelectedView}:Props)=>{

 const [selectedCard,setSelected]=useState(false)




  
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
            <a className="link-view" onClick={cardSelectedView} ><img  src={ViewImage} alt="" /></a>
            <a className="link-lixeira" onClick={cardSelectedDelete}><img src={LixeiraImage} alt="" /></a>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 



    </>
}