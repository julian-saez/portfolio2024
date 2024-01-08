import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility'

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Cargando</div>}>
        <BrowserRouter>
              <RoutesWithNotFound>
                <Route path="/" element={<p>hola</p>} />
              </RoutesWithNotFound>
            </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
