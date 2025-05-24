// import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Project from './component/Project'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

function App() {


  const [mode ,setMode] = useState("light");

  return (
    <>
      <Navbar mode = {mode}/>
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Project/>}/>
                
            </Routes>
     
    </>
  )
}

export default App
