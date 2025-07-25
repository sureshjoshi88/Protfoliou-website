import React from 'react'
import suresh from '../images/suresh2.jpg'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import sureshcertificate from "../images/suresh_certificate.png"
import suresh_cpp from "../images/suresh_c++.png"
import suresh_software from "../images/softwae_development_certificate.png"
import JavaScript from "../images/javascript.png"
import { memo } from 'react';



const Home = (props) => {
  return (
    <>
      <div className='mt-5'>
        <div>
          <div className='grid md:grid-cols-2 justify-around items-center h-auto md:mt-15 mt-5 '>
            <div className='p-2 mt-10 flex justify-center img-div'>
              <img className='md:h-90 md:w-90 h-60 w-60 mt-3  rounded-full' src={suresh} alt="" />
            </div>
            <div className='p-2 mt-3'>

              <p className='text-red-600 font-bold text-4xl text-shadow-white text-shadow-md'> Hello My name is Suresh Joshi</p>
              <p className='text-green-500 font-bold text-3xl text-shadow-white text-shadow-md pt-2'> I am Software Engineer</p>
              <div className='mt-7'>
                <p className={`font-semibold text-blue-100  text-2xl ${props.mode === "light" ? 'text-blue-800' : 'text-blue-100'}`}>I build modern web applications using React, Node.js, and MongoDB. I'm passionate about coding and love solving real-world problems with efficient solutions.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-3 mt-4'>
        <div className='p-2 mt-3'>
          <h3 className='font-semibold text-2xl'>Tech Stack</h3>
          <div >
            <p>HTML | CSS | JavaScript | React | Botstrap | Tailwind | C++ | Git | GitHub</p>
          </div>
        </div>
        <div className='p-2 flex md:justify-center mt-3'>
          <div className="flex gap-6 mb-6 text-3xl">
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
        <div className='p-2 mt-3'>
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              View Resume
            </a>


            <Link to="/projects" >
              <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-gray-800 transition">  View Projects</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-5 gap-4'>
        <div className="mt-3 bg-white p-2 rounded-lg shadow-md overflow-hidden group">
          <div className="relative">
            <img
              className="w-full h- object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              src={sureshcertificate}
              alt="React-certificate"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">React certificate</p>
            </div>
          </div>
        </div>
        <div className="mt-3 bg-white p-2 rounded-lg shadow-md overflow-hidden group">
          <div className="relative">
            <img
              className="w-full h- object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              src={suresh_cpp}
              alt="C++ certificate"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">C++</p>
            </div>
          </div>
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

export default memo(Home)
