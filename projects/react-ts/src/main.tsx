import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import MSW initialization function
import { initializeMocks } from './mocks'

// Initialize MSW
const prepare = async () => {
  // Initialize mocks in development environment
  if (import.meta.env.MODE === 'development') {
    await initializeMocks()
    console.trace('MSW initialized')
  }

  // Render the application
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

prepare()
