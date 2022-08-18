import React, { useEffect, useState } from 'react'
import * as S from './App.styled'
import { BotaoFixo } from './Components/BotaoFixo'
import { Modal } from './Components/Modal'
import { Card } from './Components/Card'
import { Notes } from './data/notes'


const App=()=>{
  const [list,setListOfNotes]=useState(Notes)
  const [onModal,setOnModal]=useState(false)
  const [opacity,setOpacity]=useState(false)
  const [cardModal,setCardModal]=useState(false)
  const  logo=<img height={40} src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-notes-physics-icongeek26-flat-icongeek26.png"/>
  const iconError=<img src="https://img.icons8.com/fluency/96/000000/error.png"/>


useEffect(()=>{

  document.querySelectorAll('.cardItem').forEach(item=>{
    item.addEventListener('click',(e)=>{
      let clicado=e.target as HTMLDivElement
      let id=clicado.id
      if(id){
      alert(id);
      
          setCardModal(true)
      }
    })
  })
 },[])

useEffect(()=>{
      let container=document.getElementById('list-container') as HTMLDivElement
          if(opacity){    
            container.style.opacity='0.5'
          }else{
                container.style.opacity='1'
          }
  },[opacity])

const actionsModal={
    openModal:()=>{
          setOnModal(true)
          setOpacity(true)
        },
    closeModal:()=>{
          setOnModal(()=>false)
          setOpacity(()=>false)
        
        }
 }
   

return <>
  <S.Container>
    <S.Header>WordBlock {logo}</S.Header>
      <S.ContainerContent>
        <S.Main id='list-container'>
          <S.ListContainer>
            { list.length !== 0 ?  list.map((item,index)=>(
                  <div key={index} >
                      <Card id={item.id} title={item.title} content={item.content} data={item.data} />
                  </div>)) 
                  :
                     <S.ErrorMensage >
                        <div>
                            <h3> Nenhuma anotação ainda {iconError}</h3>
                        </div>
                     </S.ErrorMensage>
            }
            
          </S.ListContainer>
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
            
       </S.Main>
    </S.ContainerContent>
      <S.ContainerModal>
        { onModal && <Modal activateOffModal={actionsModal.closeModal} />}
     
      </S.ContainerModal>
  </S.Container>
 </>






}
export default App;