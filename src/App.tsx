import React from 'react'
import * as S from './App.styled'
import { BotaoFixo } from './Components/BotaoFixo'
import { Modal } from './Components/Modal'

const App=()=>{
return <>
  <S.Container>
  <S.Header>WordBlock</S.Header>
      <S.ContainerContent>
        <S.Main>
          -

          <BotaoFixo></BotaoFixo>
          <S.ContainerModal>
          <Modal />
        </S.ContainerModal>
        </S.Main>
        
      </S.ContainerContent>
  </S.Container>
 </>






}
export default App;