import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const JonApp = lazy(() => import('@apps/jonapp/src/main'))

const MicroUPX = () => {
  return (
    <>
      <h1>MicroUPX</h1>
      <p>This is the MicroUPX component</p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/jon">Jon App</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MicroUPX />} />
        <Route path="/jon" element={
          <Suspense fallback={<div>Loading...</div>}>
            <JonApp />
          </Suspense>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
