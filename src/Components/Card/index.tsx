import React from "react"
import * as S from './style'


type Props ={
    id:number,
    title:string,
    content:string,
    data:string
}
export const Card=({id,title,content,data}:Props)=>{
    return <>
    <S.cardContainer className="cardItem">
        <S.cardData>
            <span><h3>{title}</h3></span>
            <span><h3>{data}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={content}></textarea>
        </S.cardContent>
    </S.cardContainer>
 



    </>
}