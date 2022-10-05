import * as S from './style'
import LixeiraImage from '../../assets/images/lixeira.png'
import EditImage from '../../assets/images/edit.png'


type Props={
idCard?:string,
titleCard:string,
contentCard:string,
dateCard:string
clikedDelete?:()=>void

}

export const CardItem=({idCard,dateCard,titleCard,contentCard}:Props)=>{

   
     
    return <>
    <S.cardContainer className="cardItem">
        <S.cardData>
            <span><h3 id="title-card">{titleCard}</h3></span>
            <span><h3>{dateCard}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={contentCard}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal>
            <button className="link-view"  ><img  src={EditImage} alt="" /></button>
            <button className="link-lixeira"  ><img src={LixeiraImage}  alt="" /></button>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 </>




}