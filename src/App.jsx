
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Contact from './component/Contact'
import About from './component/About'
import Project from './component/Project'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Foter from './component/Foter'

function App() {
  const toggleButton = () => {
    let side_bar = document.getElementById("side-bar");
    side_bar.style.transition = "0.8s 0.2s  linear"
    side_bar.style.right = "0px";
  }
  const removeToggle = () => {
    let side_bar = document.getElementById("side-bar");
    side_bar.style.transition = "0.8s 0.2s  linear"

    side_bar.style.right = "-100%";
  }

  const [mode, setMode] = useState("dark");


  const toglemode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
      setMode("light")
    } else {
      document.body.style.backgroundColor = "#0a192f"
      document.body.style.color = "white"
      setMode("dark")
    }
  }
  return (
    <>
      <Navbar toglemode={toglemode} mode={mode} toggleButton={toggleButton} removeToggle={removeToggle} />
      <Routes>
        <Route path="/" element={<Home  mode={mode}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project mode={mode} />} />

      </Routes>
        <Foter/>
    </>
  )
}

export default App
