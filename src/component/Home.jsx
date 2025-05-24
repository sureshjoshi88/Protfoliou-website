import React from 'react'
import suresh from '../images/suresh.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import sureshcertificate from "../images/suresh_certificate.png"
import suresh_cpp from "../images/suresh_c++.png"
import suresh_software from "../images/softwae_development_certificate.png"
import JavaScript from "../images/javascript.png"



const Home = () => {
  return (
    <>
      <div className='mt-5'>
        <div className='background-image'>
          <div className='grid md:grid-cols-2 justify-around items-center h-150 '>
            <div className='p-1 mt-3 flex justify-center'>
              <img className='h-90 w-90   rounded-full' src={suresh} alt="" />
            </div>
            <div className='p-1 mt-3'>

              <p className='text-red-600 font-bold text-4xl text-shadow-white text-shadow-md'>My name is Suresh Joshi</p>
              <p className='text-green-500 font-bold text-3xl text-shadow-white text-shadow-md pt-2'> I am a Full Stack Developer</p>
              <div className='mt-7'>
                <p className='font-semibold text-blue-100  text-2xl'>I build modern web applications using React, Node.js, and MongoDB. I'm passionate about coding and love solving real-world problems with efficient solutions.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 mt-4'>
        <div className='p-2'>
          <h3 className='font-semibold text-2xl'>Tech Stack</h3>
          <div >
            <p>HTML | CSS | JavaScript | React | Botstrap | Tailwind | Git | GitHub</p>
          </div>
        </div>
        <div className='p-2 flex justify-center'>
          <div className="flex gap-6 mb-6 text-2xl">
            <a
              href="https://github.com/sureshjoshi88"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-joshi-17a886314"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:joshisuresh123u@gmail.com"
              className="hover:text-red-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className='p-2 '>
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              View Resume
            </a>


            <Link   to="/projects" >
              <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-gray-800 transition">  View Projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-5 gap-4'>
        <div className='mt-3 bg-white  p-2'>
          <img className='rounded'  src={sureshcertificate} alt="" />
        </div>
        <div className='mt-3 bg-white  p-2'>
          <img className='rounded'  src={suresh_cpp } alt="" />
        </div>
       <div className="mt-3 bg-white p-2 rounded-lg shadow-md overflow-hidden group">
  <div className="relative">
    <img
      className="w-full h- object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      src={suresh_software}
      alt="software-develoment"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-xl font-bold">softwae_development</p>
    </div>
  </div>
</div>

        
     
<div className="mt-3 bg-white p-2 rounded-lg shadow-md overflow-hidden group">
  <div className="relative">
    <img
      className="w-full h- object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      src={JavaScript}
      alt="JavaScript"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-xl font-bold">JavaScript</p>
    </div>
  </div>
</div>


      </div>
    </>
  )
}

export default Home
