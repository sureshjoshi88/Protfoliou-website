import React from 'react'
import suresh from './images/suresh.jpg'

const Home = () => {
  return (
    <div>
      <div className='background-image'>
        <div className='flex justify-center items-center h-200 me-5'>
        <img className='h-70 w-70  rounded-4xl' src={suresh} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
