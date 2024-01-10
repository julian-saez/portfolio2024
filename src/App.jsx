import { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import RoutesWithNotFound from './utilities/RoutesWithNotFound.utility';
import HomePage from './pages/Home';

function App() {
  return (
    <Suspense fallback={<div>Cargando</div>}>
      <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<HomePage />} />
            </RoutesWithNotFound>
          </BrowserRouter>
    </Suspense>
  )
}

export default App
