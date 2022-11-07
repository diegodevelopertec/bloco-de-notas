import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import * as S from './App.styled'
import { AuthPrivate } from './Components/AuthRoute'
import { AllNotes } from './Pages/AllNotes/AllNotes'
import { LoginPage } from './Pages/Login/login'
import { Register } from './Pages/Register'


const App=()=>{ 
 
  
  const [cardModal,setCardModal]=useState(false)


return <>
  <Router>
  <S.Container>
    <S.Header>WordBlock </S.Header>
    <S.ContainerProfile>
      <div>Bem vindo Diego</div>
    </S.ContainerProfile>
      <S.ContainerContent>
        <Routes>
           <Route path='/register' element={<Register/>} />
           <Route path='/' element={<LoginPage />} />
           <Route path='/notes' element={<AuthPrivate><AllNotes/></AuthPrivate>} />
        </Routes>
    </S.ContainerContent>
    
  </S.Container>
 
  </Router>
 </>






}
export default App;