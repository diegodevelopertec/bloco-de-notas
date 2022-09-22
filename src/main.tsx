import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  {ContextProvider} from './contexts/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ContextProvider>
      <App />
  </ContextProvider>
  
)
