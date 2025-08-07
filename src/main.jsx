import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersonalInfoContextProvider } from './contexts/PersonalInfoContext.jsx'
import { ContactContextProvider } from './contexts/ContactContext.jsx'
import { AboutContextprovider } from './contexts/AboutContext.jsx'
import { SocialAccountContextProvider } from './contexts/SocialAccountContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfoContextProvider>
      <ContactContextProvider>
        <AboutContextprovider>
          <SocialAccountContextProvider>
            <App />
          </SocialAccountContextProvider>
        </AboutContextprovider>
      </ContactContextProvider>
    </PersonalInfoContextProvider>    
  </StrictMode>,
)
