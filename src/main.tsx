import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { TaskProvider } from './context/TaskContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import './utils/sprig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
