import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProviderAuth } from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

 
 <ProviderAuth>
    
    <App />
 </ProviderAuth>
   
 
)
