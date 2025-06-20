import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyProfileCard from './Components/myProfileCard'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProfileCard />
  </StrictMode>,
)
