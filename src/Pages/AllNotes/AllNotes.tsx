import { useState,useEffect } from "react"
import { Card } from "../../Components/Card"
import { Modal } from "../../Components/Modal"
import { BotaoFixo } from "../../Components/BotaoFixo"
import * as S from './styled'
import { CardItem } from "../../Components/CardItem"
import errorImageIcons from '../../assets/images/error.png'
import { NotesTypes } from "../../types/notesType"
import {ApiActions} from '../../Services/notes'
import { Loading } from "../../Components/Loading"
import { toast } from 'react-toastify';


export const AllNotes=()=>{
  //STATES
  const [onModal,setOnModal]=useState(false)
  const [opacity,setOpacity]=useState(false)
  const [notes,setNotes]=useState<NotesTypes[]>([])
  const [activeModalContainer,setActiveModalContainer]=useState(false)
  const [dataModalEdit,setDataModalEdit]=useState<NotesTypes | any>()
  const [visibleModalEdit,setVisibleModalEdit]=useState(false)
  const [isLoading,setIsLoading]=useState(true)
  

  //EFFECTS
  const   loadNotes=async()=>{
    let json=await ApiActions.getAllNotes()
    setIsLoading(false)
     setNotes(json)
  
    }

  useEffect(()=>{
    setInterval(()=>loadNotes() , 1000)
  },[])
  


    
 //Functions
  const deleteNote=async (id:number )=>{
      try{
         let json=await ApiActions.delNote(id)
         toast.success('Anotação deletada')
          return json
      }catch(e){
        console.log(e);
      }
  
  }


  const actionsModal={
          openModal:()=>{setActiveModalContainer(true,),setOnModal(true) , setOpacity(true) },
          closeModal:()=>{setActiveModalContainer(false), setOnModal(false) , setOpacity(false)}
  }


  const returnDataModalEdit=(data:NotesTypes)=>{
    setDataModalEdit(data)
    setOpacity(true)
    setVisibleModalEdit(true)
    setActiveModalContainer(true)
   
  }

  const removeModals=()=>{
    setOpacity(false)
    setVisibleModalEdit(false)
    setActiveModalContainer(false)
   
  }

return <>
    <S.Main id='list-container'>
   
      
          <S.ListContainer errorState={notes.length === 0 ? true : false} listLength={notes.length} opacityCondition={opacity} className="list-card-container">
            {isLoading  ? <Loading typeLoad='spinningBubbles' color='#2b79c2' text='carregando suas anotações' />  :
            notes.length  !== 0 ?  
              notes.map((item,index)=>(
              
                  <div key={index}  >
                
                      <Card 
                         clickDelete={()=>{deleteNote(item.id)}} 
                         info={item} 
                         onClick={returnDataModalEdit}
                      />
                  </div>)) 
                    :
                    <S.ErrorMensage >
                        <div>
                            <h3> Nenhuma anotação ainda <img src={errorImageIcons} alt="" /></h3>
                        </div>
                     </S.ErrorMensage>
            }
          
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
          </S.ListContainer>
       
       </S.Main>
       {activeModalContainer && <S.ContainerModal >
           { onModal && <Modal  activateOffModal={actionsModal.closeModal} />}
           {visibleModalEdit ?  <CardItem  closeCardItem={removeModals} data={dataModalEdit} /> : null}
       </S.ContainerModal>}
    
    </>
}


