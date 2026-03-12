import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './components/CounterContextProvider.jsx'
import  UserContextProvider  from './components/UserContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap root component with provider */}
    <UserContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </UserContextProvider>
  </StrictMode>,
)
