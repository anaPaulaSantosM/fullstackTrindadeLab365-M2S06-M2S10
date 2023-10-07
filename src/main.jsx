import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BannerProvider } from './shared/contexts/BannerContext.jsx'
import { ModalPProvider } from './shared/contexts/ModalPContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <ModalPProvider>
      <BannerProvider>
        <App />
      </BannerProvider>
    </ModalPProvider>
  </React.StrictMode>,
)
