import * as S from './style'
import LixeiraImage from '../../assets/images/lixeira.png'
import EditImage from '../../assets/images/edit.png'
import { NotesTypes } from '../../types/notesType'


type Props={
    data:NotesTypes
   clikedDelete?:()=>void

}

export const CardItem=({data}:Props)=>{

    return <>
    <S.cardContainer id={data.id.toString()} className="cardItem">
        <S.cardData>
            <span><h3 id="title-card">{data.title}</h3></span>
            <span><h3>{data.data}</h3></span>
        </S.cardData>
        <S.cardContent>
            <textarea disabled name="" id="" value={data.content}></textarea>
        </S.cardContent>
        <S.ContainerActionsModal>
            <button className="link-view"  ><img  src={EditImage} alt="" /></button>
            <button className="link-lixeira"  ><img src={LixeiraImage}  alt="" /></button>
            
        </S.ContainerActionsModal>
    </S.cardContainer>
 </>




}