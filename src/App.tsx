import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import * as S from './App.styled'
import { AllNotes } from './Pages/AllNotes/AllNotes'
import { LoginPage } from './Pages/Login/login'
import { Register } from './Pages/Register'


const App=()=>{ 
 
  
  const [cardModal,setCardModal]=useState(false)

 


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




return <>
  <Router>
  <S.Container>
    <S.Header>WordBlock </S.Header>
      <S.ContainerContent>
        <Routes>
           <Route path='/register' element={<Register/>} />
           <Route path='/' element={<LoginPage />} />
           <Route path='/notes' element={<AllNotes />} />
        
        </Routes>
    </S.ContainerContent>
    
  </S.Container>
  </Router>
 </>






}
export default App;