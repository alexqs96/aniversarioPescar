import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './router'
import Providers from './providers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <Routers />
    </Providers>
  </React.StrictMode>
)
