import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './routes/RoutesPage'; // Archivo de configuración de rutas


function App() {
  return (

      <div className='app-container'>
        <Router>
          <Nav />
          <RoutesPage />
        </Router>
      </div>

  )
}

export default App
