import React from 'react'
import suresh from '../images/suresh.jpg'

const Home = () => {
  return (
    <div className='mt-5'>
      <div className='background-image'>
        <div className='flex justify-around items-center h-150 '>
          <div>
                    <img className='h-90 w-90   rounded-full' src={suresh} alt="" />
          </div>
          <div>

                    <p className='text-red-600 font-bold text-5xl text-shadow-white text-shadow-md'>Hello my name is suresh joshi<br/> and I am a fullstack developer</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
