import React from 'react'
import suresh from '../images/suresh.jpg'

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
                    <p  className='text-green-500 font-bold text-3xl text-shadow-white text-shadow-md pt-2'> I am a Full Stack Developer</p>
                    <div className='mt-7'>
                      <p className='font-semibold text-blue-100  text-2xl'>I build modern web applications using React, Node.js, and MongoDB. I'm passionate about coding and love solving real-world problems with efficient solutions.</p>
                    </div>
          </div>

        </div>
      </div>
    </div>

    <div className='grid grid-cols-3'>
    <div>
      <h3 className='font-semibold text-2xl'>Tech Stack</h3>
      <div >
        <p>HTML | CSS | JavaScript | React | Node.js | Botstrap | Tailwind | Git | GitHub</p>
      </div>
    </div>
    <div></div>
    <div></div>
    </div>
    </>
  )
}

export default Home
