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


  const [mode ,setMode] = useState("dark");


  const toglemode = ()=>{
    if(mode==="dark"){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
      setMode("light")
    }else{
      document.body.style.backgroundColor = "#0a192f"
      document.body.style.color = "white"
      setMode("dark")
    }
  }
  return (
    <>
      <Navbar toglemode={toglemode} mode = {mode}/>
       <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Project mode = {mode}/>}/>
                
            </Routes>
     
    </>
  )
}

export default App
