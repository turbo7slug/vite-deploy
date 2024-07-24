import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/projects" element ={<Projects/>}/>
    <Route path="/contact" element ={<Contact/>}/>
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
