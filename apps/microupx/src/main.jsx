import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { worker } from '@packages/mock-api/browser'

import App from './App.jsx'

async function enableMocking() {

  if (!import.meta.env.VITE_ENABLE_MOCK_API) {
    return
  }
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

await enableMocking()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
