import React, { useState } from 'react'
import * as S from './App.styled'
import { BotaoFixo } from './Components/BotaoFixo'
import { Modal } from './Components/Modal'
import { Card } from './Components/Card'
import { Notes } from './data/notes'

const App=()=>{

  let [onModal,setOnModal]=useState(false)
const actionsModal={
    openModal:()=>{
      setOnModal(true)
    },
    closeModal:()=>{
      setOnModal(()=>false)
    }
  }


return <>
  <S.Container>
    <S.Header>WordBlock</S.Header>
      <S.ContainerContent>
      <S.Main>
        <S.ListContainer >
       
        { Notes.map((item,index)=>(
            <div>
                <Card key={index} title={item.title} content={item.content} data={item.data} />
            </div>)) 
            }
        
       
        
        </S.ListContainer>
        
    
      
          <BotaoFixo activateOnModal={actionsModal.openModal}/>
          
      </S.Main>
      </S.ContainerContent>
      <S.ContainerModal>
        {  onModal && <Modal activateOffModal={actionsModal.closeModal} />}
      </S.ContainerModal>
  </S.Container>
 </>






}
export default App;