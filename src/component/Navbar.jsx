import React from 'react'
import { FaBarsProgress } from "react-icons/fa6";
import {  Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className='p-2 fixed top-0 w-full bg-white z-40'>
      <div className='flex justify-between'>
          <div>
            <h2 className='text-2xl'>Portfoliou</h2>
        </div>

        <div>
            <ul className='flex gap-5 '>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </div>

        <div>
            <p>mode</p>
        </div>
        <div>
          <button className='text-2xl md:hidden'><FaBarsProgress /></button>
        </div>
      </div>


      </nav>
    </div>
  )
}

export default Navbar
