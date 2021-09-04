import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from "@auth0/auth0-react"
import './index.css'
import App from './App'
import { AppProvider } from './context'


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wiblyx6t.us.auth0.com"
      clientId="im2xnOOTX1AfOiQpeZuAcbEplwJrQn9e"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
