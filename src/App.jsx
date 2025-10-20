import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import Ofertas from './components/Ofertas'
import Infaltables from './components/Infaltables'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Container>

        <Routes>
          <Route path="/administracion" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/ofertas" element={<Ofertas/>} />
          <Route path="/infaltables" element={<Infaltables/>} />
        </Routes>
      </Container>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
